import express from "express";
import ReactDOM from "react-dom/server";
import { App } from "../App.tsx";
import { indexTemplate } from './indexTemplate';
import { generateRandomString } from "../utils/generation/generateRandomIndex";
import { generateFiveDigitNumber } from "../utils/generation/generateFiveDigitNumber";
import { generateFifteenDigitNumber } from "../utils/generation/generateFifteenDigitNumber";
import {
  auth,
  createHash,
  createSession,
  deleteSession,
  fillCurrenciesWithData,
  findUserByUsername,
  findAccountByAccount,
  findCurrencyByCurrency,
  findUserBySessionId,
  getCurrenciesForUser,
  sendCurrenciesExchangeToAllClients,
  getAllCurrenciesExchange,
  insertNewValuesForCurrenciesExchange,
  updateCurrenciesTable
} from "./apiMethods";
import WebSocket from "ws";
import * as http from "http";
import bodyParser from "body-parser";
import cookie from 'cookie';
import cookieParser from "cookie-parser";
import knex from "knex";

export const database = knex({
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: './data/db.sqlite3'
  },
  migrations: {
    tableName: "knex_migrations",
  }
})

const app = express();

app.use(express.json());
app.use("/static", express.static("./dist/client"));
app.use(cookieParser());

const server = http.createServer(app);
const wss = new WebSocket.Server({ clientTracking: false, noServer: true });
const clients = new Map();

server.on('upgrade', async (req, socket, head) => {
  const cookies = cookie.parse(req.headers['cookie']);
  const sessionId = cookies && cookies['sessionId'];
  const user = await findUserBySessionId(sessionId);

  if (!user) {
    socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
    socket.destroy();
    return;
  }

  wss.handleUpgrade(req, socket, head, (ws) => {
    wss.emit('connection', ws)
  })
})

wss.on('connection', async(ws) => {
  clients.set(ws);

  setInterval(async () => {
    const currenciesExchange = await getAllCurrenciesExchange();
    const newCurrenciesExchange = await insertNewValuesForCurrenciesExchange(currenciesExchange);

    await sendCurrenciesExchangeToAllClients(ws, newCurrenciesExchange, clients);
  }, 10000);
})

app.post("/login", bodyParser.urlencoded({ extended: false }), async (req, res) => {
  const { username, password } = req.body;
  const user = await findUserByUsername(username);

  if (username.length === 0 || password.length === 0) {
    return res.send(indexTemplate(ReactDOM.renderToString(
      App()),
      JSON.stringify({ login: true, loginError: 'Введите логин/пароль' })
    ));
  }

  if (!user || user.password !== createHash(password)) {
    return res.send(indexTemplate(ReactDOM.renderToString(
      App()),
      JSON.stringify({ login: true, loginError: 'Неверный логин/пароль' })
    ));
  }

  const sessionId = await createSession(user.id);

  res
    .cookie("sessionId", sessionId, { httpOnly: true })
    .send(indexTemplate(ReactDOM.renderToString(
      App()),
      JSON.stringify(user)
    ));
});

app.post("/signup",bodyParser.urlencoded({ extended: false }), async (req, res) => {
  const { username, password } = req.body;
  const foundUsername = await findUserByUsername(username);
  const userId = generateRandomString();

  if (username.length === 0 || password.length === 0) {
    return res.send(indexTemplate(ReactDOM.renderToString(
      App()),
      JSON.stringify({ signup: true, signupError: 'Придумайте логин/пароль' })
    ));
  }

  if (foundUsername && username === foundUsername.username) {
    return res.send(indexTemplate(ReactDOM.renderToString(
      App()),
      JSON.stringify({ signup: true, signupError: 'Данный пользователь уже зарегистрирован' })
    ));
  }

  await database('users')
    .insert({
      id: userId,
      username: username,
      password: createHash(password)
    });

  res.send(indexTemplate(ReactDOM.renderToString(
    App()),
    JSON.stringify({ signup: true, signupSuccess: 'Аккаунт успешно создан' })
  ));
});

app.post("/create-account", auth(), bodyParser.urlencoded({ extended: false }), async (req, res) => {
  const number = generateFifteenDigitNumber();
  const balance = generateFiveDigitNumber();

  await database('accounts')
    .insert({
      id: generateRandomString(),
      userId: req.user.id,
      number: number,
      balance: balance
    })

  res.send(indexTemplate(ReactDOM.renderToString(
    App()),
    JSON.stringify(req.user ? req.user : {})
  ));
});

app.post("/transfer-funds", auth(), bodyParser.urlencoded({ extended: false }), async (req, res) => {
  const { from, to, sum } = req.body;
  const currentAccount = await findAccountByAccount(Number(from));
  const foundAccount = await findAccountByAccount(Number(to));
  req.user.currentAccount = Number(from);

  if (from.length === 0 || to.length === 0) {
    req.user.transferError = 'Введите номер счёта получателя/сумму перевода';

    return res.send(indexTemplate(ReactDOM.renderToString(
      App()),
      JSON.stringify(req.user ? req.user : {})
    ));
  }

  if (foundAccount === undefined) {
    req.user.transferError = 'Указанного вами счёта не существует';

    return res.send(indexTemplate(ReactDOM.renderToString(
      App()),
      JSON.stringify(req.user ? req.user : {})
    ));
  }

  if (Number(from) === foundAccount.number) {
    req.user.transferError = 'Нельзя перевести средства со своего счёта на свой';

    return res.send(indexTemplate(ReactDOM.renderToString(
      App()),
      JSON.stringify(req.user ? req.user : {})
    ));
  }

  if (Number(sum) < 10) {
    req.user.transferError = 'Нельзя перевести меньше средств, чем 10 рублей';

    return res.send(indexTemplate(ReactDOM.renderToString(
      App()),
      JSON.stringify(req.user ? req.user : {})
    ));
  }

  if (Number(sum) > currentAccount.balance) {
    req.user.transferError = 'Нельзя перевести больше средств, чем есть на счёте';

    return res.send(indexTemplate(ReactDOM.renderToString(
      App()),
      JSON.stringify(req.user ? req.user : {})
    ));
  }

  const [currentAccountSum] = await database('accounts')
    .select()
    .where({ number: Number(from) })
  const [currentAnotherAccountSum] = await database('accounts')
    .select()
    .where({ number: Number(to) })

  await database('transactions')
    .insert({
      id: generateRandomString(),
      userId: req.user.id,
      sum: sum,
      date: Date.now(),
      from: Number(from),
      to: Number(to)
    })

  await database('accounts')
    .where({ number: Number(from) })
    .update({ balance: currentAccountSum.balance - Number(sum) })

  await database('accounts')
    .where({ number: to })
    .update({ balance: currentAnotherAccountSum.balance + Number(sum) })

  await database('accountsBalance')
    .insert({
      id: generateRandomString(),
      userId: req.user.id,
      number: Number(from),
      balance: currentAccountSum.balance - Number(sum),
      date: Date.now()
    })

  await database('accountsBalance')
    .insert({
      id: generateRandomString(),
      userId: req.user.id,
      number: Number(to),
      balance: currentAnotherAccountSum.balance + Number(sum),
      date: Date.now()
    })

  res.send(indexTemplate(ReactDOM.renderToString(
    App()),
    JSON.stringify(req.user ? req.user : {})
  ));
});

app.post("/currency-buy", auth(), bodyParser.urlencoded({ extended: false }), async (req, res) => {
  const { from, to, amount } = req.body;

  if (from.length === 0 || to.length === 0 || amount.length === 0) {
    req.user.currencyError = 'Выберите валютные коды/введите сумму перевода';

    return res.send(indexTemplate(ReactDOM.renderToString(
      App()),
      JSON.stringify(req.user ? req.user : {})
    ));
  }

  if (from === to) {
    req.user.currencyError = 'Нельзя конвертировать валюту в точно такую же';

    return res.send(indexTemplate(ReactDOM.renderToString(
      App()),
      JSON.stringify(req.user ? req.user : {})
    ));
  }

  const fromCurrency = await findCurrencyByCurrency(req.user.id, from);

  if (fromCurrency === undefined) {
    req.user.currencyError = 'Вы еще не приобрели выбранную вами конвертируемую валюту';

    return res.send(indexTemplate(ReactDOM.renderToString(
      App()),
      JSON.stringify(req.user ? req.user : {})
    ));
  }

  if (Number(amount) > fromCurrency.amount) {
    req.user.currencyError = 'Нельзя перевести больше средств, чем есть у вас в валюте';

    return res.send(indexTemplate(ReactDOM.renderToString(
      App()),
      JSON.stringify(req.user ? req.user : {})
    ));
  }

  const [exchangeRate] = await database('exchange')
    .select()
    .where({ from: from, to: to })

  await updateCurrenciesTable(req, to, 1, amount, exchangeRate.rate);

  await database(from)
    .where({ userId: req.user.id, code: from })
    .update({
      amount: database.raw(`amount - ${Number(amount)}`)
    })

  await database(to)
    .where({ userId: req.user.id, code: to })
    .update({
      amount: database.raw(`amount + ${Number(amount)} * ${exchangeRate.rate}`)
    })

  res.send(indexTemplate(ReactDOM.renderToString(
    App()),
    JSON.stringify(req.user ? req.user : {})
  ));
});

app.get("/", auth(), (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(
    App()),
    JSON.stringify(req.user ? req.user : {})
  ));
});

app.get("/logout", auth(), async (req, res) => {
  await deleteSession(req.sessionId);
  res.clearCookie("sessionId").send(indexTemplate(ReactDOM.renderToString(
    App()),
    JSON.stringify({ login: true })
  ));
});

app.get("/signup", auth(), (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(
    App()),
    JSON.stringify(req.user ? req.user : { signup: true })
  ));
});

app.get("/accounts-data", auth(), async (req, res) => {
  const accounts = await database('accounts')
    .select()
    .where({ userId: req.user.id })

  res.json({ accounts });
});

app.get("/accounts-balance/:number", auth(), async (req, res) => {
  const accountsBalance = await database('accountsBalance')
    .select()
    .where({ number: req.params.number })

  res.json({ accountsBalance });
});

app.get("/transactions-data", auth(), async (req, res) => {
  const transactions = await database('transactions')
    .select()
    .where({ userId: req.user.id })

  res.json({ transactions });
});

app.get("/currencies-data", auth(), async (req, res) => {
  const userCurrencies = await database('currencies')
    .select()
    .where({ userId: req.user.id })

  if (userCurrencies.length === 0) {
    await fillCurrenciesWithData(req.user.id);
  }

  const currencies = await getCurrenciesForUser(req.user.id);

  res.json({ currencies });
});

app.get("/banks-data", auth(), async (req, res) => {
  const banks = await database('banks').select();
  res.json({ banks });
});

app.get("*", auth(), (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(
    App()),
    JSON.stringify(req.user ? req.user : {})
  ));
});

server.listen(3000, () => {
  console.log("server started on port http://localhost:3000");
});

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
  findUserBySessionId,
  getCurrenciesForUser,
  sendCurrenciesExchangeRateToAllClients,
  getAllCurrenciesExchangeRate,
  insertNewValuesForCurrenciesExchangeRate,
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

  req.user = user;
  req.sessionId = sessionId;
  wss.handleUpgrade(req, socket, head, (ws) => {
    wss.emit('connection', ws, req)
  })
})

wss.on('connection', async(ws, req) => {
  clients.set(ws);

  setInterval(async () => {
    const currenciesExchangeRate = await getAllCurrenciesExchangeRate();
    const newCurrenciesExchangeRate = await insertNewValuesForCurrenciesExchangeRate(currenciesExchangeRate);

    await sendCurrenciesExchangeRateToAllClients(ws, newCurrenciesExchangeRate, clients);
  }, 500)
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

  if (username.length === 0 || password.length === 0) {
    return res.send(indexTemplate(ReactDOM.renderToString(
      App()),
      JSON.stringify({ signup: true, signupError: 'Введите данные' })
    ));
  }

  if ((await findUserByUsername(username)) && username === (await findUserByUsername(username)).username) {
    return res.send(indexTemplate(ReactDOM.renderToString(
      App()),
      JSON.stringify({ signup: true, signupError: 'Данный пользователь уже зарегистрирован' })
    ));
  }

  const [{ id }] = await database('users')
    .insert({
      id: generateRandomString(),
      username: username,
      password: createHash(password)
    }, 'id');

  await fillCurrenciesWithData(id);

  res.send(indexTemplate(ReactDOM.renderToString(
    App()),
    JSON.stringify({ signup: true, signupSuccess: 'Аккаунт успешно создан' })
  ));
});

app.post("/accounts/create-account", auth(), bodyParser.urlencoded({ extended: false }), async (req, res) => {
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

app.post("/accounts/:number/transfer", auth(), bodyParser.urlencoded({ extended: false }), async (req, res) => {
  const { from, to, sum } = req.body;

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

app.get("/transactions-data", auth(), async (req, res) => {
  const transactions = await database('transactions')
    .select()
    .where({ userId: req.user.id })

  res.json({ transactions });
});

app.get("/currencies-data", auth(), async (req, res) => {
  const currencies = await getCurrenciesForUser(req.user.id);
  res.json({ currencies });
});

app.get("*", auth(), (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(
    App()),
    JSON.stringify(req.user ? req.user : {})
  ));
});

app.listen(3000, () => {
  console.log("server started on port http://localhost:3000");
});

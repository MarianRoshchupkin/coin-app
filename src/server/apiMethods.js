import { generateRandomString } from "../utils/generation/generateRandomIndex";
import { generateInsertQueryForCurrencies } from "../utils/generation/generateInsertQueryForCurrencies";
import { generateFiveDigitNumber } from "../utils/generation/generateFiveDigitNumber";
import { database } from "./server";
import crypto from "crypto";

export const getAllCurrenciesExchange = async () => database('exchange').select();

export const insertNewValuesForCurrenciesExchange = async (oldCurrenciesExchange) => {
  for (const currencyExchange of oldCurrenciesExchange) {
    const oldCurrencyExchange = currencyExchange.rate;
    currencyExchange.rate = Math.random();

    if (oldCurrencyExchange > currencyExchange.rate) {
      currencyExchange.change = -1;
    }

    if (oldCurrencyExchange < currencyExchange.rate) {
      currencyExchange.change = 1;
    }

    await database('exchange')
      .where({ id: currencyExchange.id })
      .update({
        rate: currencyExchange.rate,
        change: currencyExchange.change
      })
  }

  return database('exchange').select();
}

const sendCurrenciesExchange = (ws, currenciesExchange) => {
  ws.send(
    JSON.stringify({
      type: 'EXCHANGE_RATE_CHANGE',
      currenciesExchange: currenciesExchange
    })
  )
}

export const sendCurrenciesExchangeToAllClients = async (ws, currenciesExchange, clients) => {
  Array.from(clients.entries()).forEach(() => {
    sendCurrenciesExchange(ws, currenciesExchange);
  });
}

export const auth = () => async (req, res, next) => {
  if (!req.cookies['sessionId'])
    return next();

  req.user = await findUserBySessionId(req.cookies['sessionId']);
  req.sessionId = req.cookies["sessionId"];
  next();
};

export const findUserByUsername = async (username) =>
  database('users')
    .select()
    .where({ username })
    .first()

export const findAccountByAccount = async (account) =>
  database('accounts')
    .select()
    .where({ number: account })
    .first()

export const findCurrencyByCurrency = async (userId, currency) =>
  database(currency)
    .select()
    .where({ userId: userId, code: currency })
    .first()

export const findUserBySessionId = async (sessionId) => {
  const session = await database('sessions')
    .select('userId')
    .where({ sessionId: sessionId })
    .first()

  if (!session) return;

  return database('users')
    .select()
    .where({ id: session.userId })
    .first()
};

export const createSession = async (userId) => {
  const sessionId = generateRandomString();

  await database('sessions').insert({
    userId: userId,
    sessionId: sessionId,
  })

  return sessionId;
};

export const deleteSession = async (sessionId) => {
  await database('sessions').where({ sessionId: sessionId }).delete();
};

export const createHash = (password) => {
  const hash = crypto.createHash("sha256");
  return hash.update(password).digest("hex");
};

export const updateCurrenciesTable = async (req, currency, value, amount, rate) => {
  const [currencies] = await database('currencies')
    .select()
    .where({ userId: req.user.id })

  if (currencies[currency] === 0) {
    await database(currency)
      .insert({
        id: generateRandomString(),
        userId: req.user.id,
        amount: database.raw(Number(amount)),
        code: currency
      })
  }

  currencies[currency] = value;

  await database('currencies')
    .where({ userId: req.user.id })
    .update(currencies)
}

export const fillCurrenciesWithData = async (userId) => {
  const currenciesQueries = generateInsertQueryForCurrencies(userId);
  const currenciesCodes = ['AUD', 'BTC', 'BYR', 'CAD', 'CHF', 'CNH', 'ETH', 'EUR', 'GBP', 'HKD', 'JPY', 'NZD', 'RUB', 'UAH', 'USD'];

  await database('currencies').insert(currenciesQueries);

  const [currenciesWithValues] = await database('currencies')
    .select()
    .where({ userId: userId })

  delete currenciesWithValues.id;
  delete currenciesWithValues.userId;

  const currenciesValues = Object.values(currenciesWithValues);

  for (let i = 0; i < currenciesCodes.length; i++) {
    if (currenciesValues[i] !== 0) {
      await database(currenciesCodes[i])
        .insert({
          id: generateRandomString(),
          userId: userId,
          amount: generateFiveDigitNumber(),
          code: currenciesCodes[i]
        })
    }
  }
}

export const getCurrenciesForUser = async (userId) => {
  const currenciesCodes = ['AUD', 'BTC', 'BYR', 'CAD', 'CHF', 'CNH', 'ETH', 'EUR', 'GBP', 'HKD', 'JPY', 'NZD', 'RUB', 'UAH', 'USD'];
  const currencies = [];

  const [availableCurrencies] = await database('currencies')
    .select()
    .where({ userId: userId })

  delete availableCurrencies.id;
  delete availableCurrencies.userId;

  const currenciesValues = Object.values(availableCurrencies);

  for (let i = 0; i < currenciesCodes.length; i++) {
    if (currenciesValues[i] !== 0) {
      const [currencyData] = await database(currenciesCodes[i])
        .select()
        .where({ userId: userId })

      delete currencyData.id;
      delete currencyData.userId;

      currencies.push(currencyData);
    }
  }

  return currencies;
}

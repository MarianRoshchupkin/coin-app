import { generateRandomString } from "../utils/generation/generateRandomIndex";
import { generateInsertQueryForCurrencies } from "../utils/generation/generateInsertQueryForCurrencies";
import { generateFiveDigitNumber } from "../utils/generation/generateFiveDigitNumber";
import { database } from "./server";
import crypto from "crypto";

export const postMessage = (message) => JSON.parse(message.toString());

export const getAllCurrenciesExchangeRate = async () => database('exchange').select();

export const insertNewValuesForCurrenciesExchangeRate = async (oldCurrenciesExchangeRate) => {
  for (const currencyExchangeRate of oldCurrenciesExchangeRate) {
    const oldRate = currencyExchangeRate.rate;
    currencyExchangeRate.rate = generateFiveDigitNumber();

    if (oldRate === currencyExchangeRate.rate) {
      currencyExchangeRate.change = 0;
    }

    if (oldRate > currencyExchangeRate.rate) {
      currencyExchangeRate.change = -1;
    }

    if (oldRate < currencyExchangeRate.rate) {
      currencyExchangeRate.change = 1;
    }
  }

  const [newCurrenciesExchangeRate] = await database('exchange')
    .insert(oldCurrenciesExchangeRate, '*')

  return newCurrenciesExchangeRate;
}

const sendCurrenciesExchangeRate = (ws, currenciesExchangeRate) => {
  ws.send(
    JSON.stringify({
      type: 'EXCHANGE_RATE_CHANGE',
      currenciesExchangeRate: currenciesExchangeRate
    })
  )
}

export const sendCurrenciesExchangeRateToAllClients = async (ws, currenciesExchangeRate, clients) => {
  Array.from(clients.entries()).forEach(() => {
    sendCurrenciesExchangeRate(ws, currenciesExchangeRate);
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

export const fillCurrenciesWithData = async (id) => {
  const currency = generateInsertQueryForCurrencies(id);
  const currencies = ['AUD', 'BTC', 'BYR', 'CAD', 'CHF', 'CNH', 'ETH', 'EUR', 'GBP', 'HKD', 'JPY', 'NZD', 'RUB', 'UAH', 'USD'];

  const [currenciesWithValues] = await database('currencies')
    .insert(currency, currencies);
  const currenciesValues = Object.values(currenciesWithValues);

  for (let i = 0; i < currencies.length; i++) {
    if (currenciesValues[i] !== 0) {
      await database(currencies[i])
        .insert({
          id: generateRandomString(),
          userId: id,
          amount: generateFiveDigitNumber(),
          code: currencies[i]
        })
    }
  }
}

export const getCurrenciesForUser = async (userId) => {
  const currenciesNames = ['AUD', 'BTC', 'BYR', 'CAD', 'CHF', 'CNH', 'ETH', 'EUR', 'GBP', 'HKD', 'JPY', 'NZD', 'RUB', 'UAH', 'USD'];
  const currencies = [];

  const [availableCurrencies] = await database('currencies')
    .select()
    .where({ userId: userId })

  delete availableCurrencies.id;
  delete availableCurrencies.userId;

  const currenciesValues = Object.values(availableCurrencies);

  for (let i = 0; i < currenciesNames.length; i++) {
    if (currenciesValues[i] !== 0) {
      const [currencyData] = await database(currenciesNames[i])
        .select()
        .where({ userId: userId })

      delete currencyData.id;
      delete currencyData.userId;

      currencies.push(currencyData);
    }
  }

  return currencies;
}

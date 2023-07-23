import { generateRandomString } from "./generateRandomIndex";
import { generateRandomTrueFalse } from "./generateRandomTrueFalse";

interface ICurrency {
  id: string,
  userId: string,
  AUD: boolean,
  BTC: boolean,
  BYR: boolean,
  CAD: boolean,
  CHF: boolean,
  CNH: boolean,
  ETH: boolean,
  EUR: boolean,
  GBP: boolean,
  HKD: boolean,
  JPY: boolean,
  NZD: boolean,
  RUB: boolean,
  UAH: boolean,
  USD: boolean
}

export const generateInsertQueryForCurrencies = (id: string) => {
  const currency: ICurrency = {
    id: generateRandomString(),
    userId: id,
    AUD: generateRandomTrueFalse(),
    BTC: generateRandomTrueFalse(),
    BYR: generateRandomTrueFalse(),
    CAD: generateRandomTrueFalse(),
    CHF: generateRandomTrueFalse(),
    CNH: generateRandomTrueFalse(),
    ETH: generateRandomTrueFalse(),
    EUR: generateRandomTrueFalse(),
    GBP: generateRandomTrueFalse(),
    HKD: generateRandomTrueFalse(),
    JPY: generateRandomTrueFalse(),
    NZD: generateRandomTrueFalse(),
    RUB: generateRandomTrueFalse(),
    UAH: generateRandomTrueFalse(),
    USD: generateRandomTrueFalse()
  };

  return currency;
}

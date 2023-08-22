import { ActionCreator } from "redux";

export const SET_CURRENCY_TO_TYPE = 'SET_CURRENCY_TO_TYPE';

export type SetCurrencyToTypeAction = {
  type: typeof SET_CURRENCY_TO_TYPE;
  currencyToType: string;
}

export const setCurrencyToType: ActionCreator<SetCurrencyToTypeAction> = (currencyToType) => ({
  type: SET_CURRENCY_TO_TYPE,
  currencyToType
})

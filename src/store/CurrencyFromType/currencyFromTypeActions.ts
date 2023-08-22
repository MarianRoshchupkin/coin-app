import { ActionCreator } from "redux";

export const SET_CURRENCY_FROM_TYPE = 'SET_CURRENCY_FROM_TYPE';

export type SetCurrencyFromTypeAction = {
  type: typeof SET_CURRENCY_FROM_TYPE;
  currencyFromType: string;
}

export const setCurrencyFromType: ActionCreator<SetCurrencyFromTypeAction> = (currencyFromType) => ({
  type: SET_CURRENCY_FROM_TYPE,
  currencyFromType
})

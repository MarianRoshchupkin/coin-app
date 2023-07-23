import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IInitialState } from "../reducer";
import { ICurrency } from "../../hooks/useCurrenciesData";
import axios from "axios";

export const SET_CURRENCIES = 'SET_CURRENCIES';

export type SetCurrenciesAction = {
  type: typeof SET_CURRENCIES;
  currencies: ICurrency[];
}

export const setCurrencies: ActionCreator<SetCurrenciesAction> = (currencies) => ({
  type: SET_CURRENCIES,
  currencies
})

export const setCurrenciesAsync = (): ThunkAction<void, IInitialState, unknown, Action<string>> => (dispatch) => {
  axios.get('/currencies-data')
    .then((res) => {
      const currencies = res.data.currencies;
      dispatch(setCurrencies(currencies));
    })
    .catch((error) => {
      console.log(error);
    })
}

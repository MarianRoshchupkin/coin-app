import {initialState} from "../reducer";
import {SET_CURRENCIES, SetCurrenciesAction} from "./currenciesActions";

export interface ICurrenciesState {
  currencies: any;
}

type CurrenciesActions = SetCurrenciesAction;

export const currenciesReducer = (state = initialState.currencies, action: CurrenciesActions): ICurrenciesState => {
  switch (action.type) {
    case SET_CURRENCIES:
      return {
        ...state,
        currencies: action.currencies
      }
    default:
      return state;
  }
}

import { initialState } from "../reducer";
import { SET_CURRENCY_TO_TYPE, SetCurrencyToTypeAction } from "./currencyToTypeActions";

export interface ICurrencyToTypeState {
  currencyToType: string;
}

type CurrencyToTypeActions = SetCurrencyToTypeAction;

export const currencyToTypeReducer = (state = initialState.currencyToType, action: CurrencyToTypeActions): ICurrencyToTypeState => {
  switch (action.type) {
    case SET_CURRENCY_TO_TYPE:
      return {
        ...state,
        currencyToType: action.currencyToType
      }
    default:
      return state;
  }
}

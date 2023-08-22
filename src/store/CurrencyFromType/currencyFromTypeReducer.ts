import { initialState } from "../reducer";
import { SET_CURRENCY_FROM_TYPE, SetCurrencyFromTypeAction } from "./currencyFromTypeActions";

export interface ICurrencyFromTypeState {
  currencyFromType: string;
}

type CurrencyFromTypeActions = SetCurrencyFromTypeAction;

export const currencyFromTypeReducer = (state = initialState.currencyFromType, action: CurrencyFromTypeActions): ICurrencyFromTypeState => {
  switch (action.type) {
    case SET_CURRENCY_FROM_TYPE:
      return {
        ...state,
        currencyFromType: action.currencyFromType
      }
    default:
      return state;
  }
}

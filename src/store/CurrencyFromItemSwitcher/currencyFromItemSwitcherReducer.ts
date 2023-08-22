import { initialState } from "../reducer";
import {
  SET_CURRENCY_FROM_ITEM_SWITCHER,
  SetCurrencyFromItemSwitcherAction
} from "./currencyFromItemSwitcherActions";

export interface ICurrencyFromItemSwitcherState {
  currencyFromItemSwitcher: boolean;
}

type CurrencyFromItemSwitcherActions = SetCurrencyFromItemSwitcherAction;

export const currencyFromItemSwitcherReducer = (state = initialState.currencyFromItemSwitcher, action: CurrencyFromItemSwitcherActions): ICurrencyFromItemSwitcherState => {
  switch (action.type) {
    case SET_CURRENCY_FROM_ITEM_SWITCHER:
      return {
        ...state,
        currencyFromItemSwitcher: action.currencyFromItemSwitcher
      }
    default:
      return state;
  }
}

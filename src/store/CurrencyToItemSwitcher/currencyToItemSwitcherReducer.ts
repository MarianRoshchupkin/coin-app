import { initialState } from "../reducer";
import {
  SET_CURRENCY_TO_ITEM_SWITCHER,
  SetCurrencyToItemSwitcherAction
} from "./currencyToItemSwitcherActions";

export interface ICurrencyToItemSwitcherState {
  currencyToItemSwitcher: boolean;
}

type CurrencyToItemSwitcherActions = SetCurrencyToItemSwitcherAction;

export const currencyToItemSwitcherReducer = (state = initialState.currencyToItemSwitcher, action: CurrencyToItemSwitcherActions): ICurrencyToItemSwitcherState => {
  switch (action.type) {
    case SET_CURRENCY_TO_ITEM_SWITCHER:
      return {
        ...state,
        currencyToItemSwitcher: action.currencyToItemSwitcher
      }
    default:
      return state;
  }
}

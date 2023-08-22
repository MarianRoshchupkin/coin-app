import { initialState } from "../reducer";
import {
  SET_CURRENCY_TO_DROPDOWN_SWITCHER,
  SetCurrencyToDropdownSwitcherAction
} from "./currencyToDropdownSwitcherActions";

export interface ICurrencyToDropdownSwitcherState {
  currencyToDropdownSwitcher: boolean;
}

type CurrencyToDropdownSwitcherActions = SetCurrencyToDropdownSwitcherAction;

export const currencyToDropdownSwitcherReducer = (state = initialState.currencyToDropdownSwitcher, action: CurrencyToDropdownSwitcherActions): ICurrencyToDropdownSwitcherState => {
  switch (action.type) {
    case SET_CURRENCY_TO_DROPDOWN_SWITCHER:
      return {
        ...state,
        currencyToDropdownSwitcher: action.currencyToDropdownSwitcher
      }
    default:
      return state;
  }
}

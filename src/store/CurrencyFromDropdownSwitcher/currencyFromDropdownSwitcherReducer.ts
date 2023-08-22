import { initialState } from "../reducer";
import {
  SET_CURRENCY_FROM_DROPDOWN_SWITCHER,
  SetCurrencyFromDropdownSwitcherAction
} from "./currencyFromDropdownSwitcherActions";

export interface ICurrencyFromDropdownSwitcherState {
  currencyFromDropdownSwitcher: boolean;
}

type CurrencyFromDropdownSwitcherActions = SetCurrencyFromDropdownSwitcherAction;

export const currencyFromDropdownSwitcherReducer = (state = initialState.currencyFromDropdownSwitcher, action: CurrencyFromDropdownSwitcherActions): ICurrencyFromDropdownSwitcherState => {
  switch (action.type) {
    case SET_CURRENCY_FROM_DROPDOWN_SWITCHER:
      return {
        ...state,
        currencyFromDropdownSwitcher: action.currencyFromDropdownSwitcher
      }
    default:
      return state;
  }
}

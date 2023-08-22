import { ActionCreator } from "redux";

export const SET_CURRENCY_FROM_DROPDOWN_SWITCHER = 'SET_CURRENCY_FROM_DROPDOWN_SWITCHER';

export type SetCurrencyFromDropdownSwitcherAction = {
  type: typeof SET_CURRENCY_FROM_DROPDOWN_SWITCHER;
  currencyFromDropdownSwitcher: boolean;
}

export const setCurrencyFromDropdownSwitcher: ActionCreator<SetCurrencyFromDropdownSwitcherAction> = (currencyFromDropdownSwitcher) => ({
  type: SET_CURRENCY_FROM_DROPDOWN_SWITCHER,
  currencyFromDropdownSwitcher
})

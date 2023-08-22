import { ActionCreator } from "redux";

export const SET_CURRENCY_TO_DROPDOWN_SWITCHER = 'SET_CURRENCY_TO_DROPDOWN_SWITCHER';

export type SetCurrencyToDropdownSwitcherAction = {
  type: typeof SET_CURRENCY_TO_DROPDOWN_SWITCHER;
  currencyToDropdownSwitcher: boolean;
}

export const setCurrencyToDropdownSwitcher: ActionCreator<SetCurrencyToDropdownSwitcherAction> = (currencyToDropdownSwitcher) => ({
  type: SET_CURRENCY_TO_DROPDOWN_SWITCHER,
  currencyToDropdownSwitcher
})

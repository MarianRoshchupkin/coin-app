import { ActionCreator } from "redux";

export const SET_CURRENCY_FROM_ITEM_SWITCHER = 'SET_CURRENCY_FROM_ITEM_SWITCHER';

export type SetCurrencyFromItemSwitcherAction = {
  type: typeof SET_CURRENCY_FROM_ITEM_SWITCHER;
  currencyFromItemSwitcher: boolean;
}

export const setCurrencyFromItemSwitcher: ActionCreator<SetCurrencyFromItemSwitcherAction> = (currencyFromItemSwitcher) => ({
  type: SET_CURRENCY_FROM_ITEM_SWITCHER,
  currencyFromItemSwitcher
})

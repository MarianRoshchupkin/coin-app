import { ActionCreator } from "redux";

export const SET_CURRENCY_TO_ITEM_SWITCHER = 'SET_CURRENCY_TO_ITEM_SWITCHER';

export type SetCurrencyToItemSwitcherAction = {
  type: typeof SET_CURRENCY_TO_ITEM_SWITCHER;
  currencyToItemSwitcher: boolean;
}

export const setCurrencyToItemSwitcher: ActionCreator<SetCurrencyToItemSwitcherAction> = (currencyToItemSwitcher) => ({
  type: SET_CURRENCY_TO_ITEM_SWITCHER,
  currencyToItemSwitcher
})

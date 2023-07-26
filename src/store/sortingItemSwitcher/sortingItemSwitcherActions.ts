import { ActionCreator } from "redux";

export const SET_SORTING_ITEM_SWITCHER = 'SET_SORTING_ITEM_SWITCHER';

export type SetSortingItemSwitcherAction = {
  type: typeof SET_SORTING_ITEM_SWITCHER;
  sortingItemSwitcher: boolean;
}

export const setSortingItemSwitcher: ActionCreator<SetSortingItemSwitcherAction> = (sortingItemSwitcher) => ({
  type: SET_SORTING_ITEM_SWITCHER,
  sortingItemSwitcher
})

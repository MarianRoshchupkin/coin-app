import { ActionCreator } from "redux";

export const SET_SORTING_DROPDOWN_SWITCHER = 'SET_SORTING_DROPDOWN_SWITCHER';

export type SetSortingDropdownSwitcherAction = {
  type: typeof SET_SORTING_DROPDOWN_SWITCHER;
  sortingDropdownSwitcher: boolean;
}

export const setSortingDropdownSwitcher: ActionCreator<SetSortingDropdownSwitcherAction> = (sortingDropdownSwitcher) => ({
  type: SET_SORTING_DROPDOWN_SWITCHER,
  sortingDropdownSwitcher
})

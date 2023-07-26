import { ActionCreator } from "redux";

export const SET_DROPDOWN_SWITCHER = 'SET_DROPDOWN_SWITCHER';

export type SetDropdownSwitcherAction = {
  type: typeof SET_DROPDOWN_SWITCHER;
  dropdownSwitcher: boolean;
}

export const setDropdownSwitcher: ActionCreator<SetDropdownSwitcherAction> = (dropdownSwitcher) => ({
  type: SET_DROPDOWN_SWITCHER,
  dropdownSwitcher
})

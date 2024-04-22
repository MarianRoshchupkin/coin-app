import { ActionCreator } from "redux";

export const SET_MENU_DROPDOWN = 'SET_MENU_DROPDOWN';

export type SetMenuDropdownAction = {
  type: typeof SET_MENU_DROPDOWN;
  menuDropdown: boolean;
}

export const setMenuDropdown: ActionCreator<SetMenuDropdownAction> = (menuDropdown) => ({
  type: SET_MENU_DROPDOWN,
  menuDropdown
})

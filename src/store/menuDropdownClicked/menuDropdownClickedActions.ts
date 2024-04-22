import { ActionCreator } from "redux";

export const SET_MENU_DROPDOWN_CLICKED = 'SET_MENU_DROPDOWN_CLICKED';

export type SetMenuDropdownClickedAction = {
  type: typeof SET_MENU_DROPDOWN_CLICKED;
  menuDropdownClicked: boolean;
}

export const setMenuDropdownClicked: ActionCreator<SetMenuDropdownClickedAction> = (menuDropdownClicked) => ({
  type: SET_MENU_DROPDOWN_CLICKED,
  menuDropdownClicked
})

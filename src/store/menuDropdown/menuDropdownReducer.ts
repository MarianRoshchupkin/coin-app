import { initialState } from "../reducer";
import { SET_MENU_DROPDOWN, SetMenuDropdownAction } from "./menuDropdownActions";

export interface IMenuDropdownState {
  menuDropdown: boolean;
}

type MenuDropdownActions = SetMenuDropdownAction;

export const menuDropdownReducer = (state = initialState.menuDropdown, action: MenuDropdownActions): IMenuDropdownState => {
  switch (action.type) {
    case SET_MENU_DROPDOWN:
      return {
        ...state,
        menuDropdown: action.menuDropdown
      }
    default:
      return state;
  }
}

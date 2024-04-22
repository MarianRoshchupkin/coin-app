import { initialState } from "../reducer";
import { SET_MENU_DROPDOWN_CLICKED, SetMenuDropdownClickedAction } from "./menuDropdownClickedActions";

export interface IMenuDropdownClickedState {
  menuDropdownClicked: boolean;
}

type MenuDropdownClickedActions = SetMenuDropdownClickedAction;

export const menuDropdownClickedReducer = (state = initialState.menuDropdownClicked, action: MenuDropdownClickedActions): IMenuDropdownClickedState => {
  switch (action.type) {
    case SET_MENU_DROPDOWN_CLICKED:
      return {
        ...state,
        menuDropdownClicked: action.menuDropdownClicked
      }
    default:
      return state;
  }
}

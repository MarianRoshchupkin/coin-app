import { initialState } from "../reducer";
import { SET_DROPDOWN_SWITCHER, SetDropdownSwitcherAction } from "./dropdownSwitcherActions";

export interface IDropdownSwitcherState {
  dropdownSwitcher: boolean;
}

type DropdownSwitcherActions = SetDropdownSwitcherAction;

export const dropdownSwitcherReducer = (state = initialState.dropdownSwitcher, action: DropdownSwitcherActions): IDropdownSwitcherState => {
  switch (action.type) {
    case SET_DROPDOWN_SWITCHER:
      return {
        ...state,
        dropdownSwitcher: action.dropdownSwitcher
      }
    default:
      return state;
  }
}

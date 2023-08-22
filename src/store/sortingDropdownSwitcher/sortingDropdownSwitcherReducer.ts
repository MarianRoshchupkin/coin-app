import { initialState } from "../reducer";
import { SET_SORTING_DROPDOWN_SWITCHER, SetSortingDropdownSwitcherAction } from "./sortingDropdownSwitcherActions";

export interface ISortingDropdownSwitcherState {
  sortingDropdownSwitcher: boolean;
}

type SortingDropdownSwitcherActions = SetSortingDropdownSwitcherAction;

export const sortingDropdownSwitcherReducer = (state = initialState.sortingDropdownSwitcher, action: SortingDropdownSwitcherActions): ISortingDropdownSwitcherState => {
  switch (action.type) {
    case SET_SORTING_DROPDOWN_SWITCHER:
      return {
        ...state,
        sortingDropdownSwitcher: action.sortingDropdownSwitcher
      }
    default:
      return state;
  }
}

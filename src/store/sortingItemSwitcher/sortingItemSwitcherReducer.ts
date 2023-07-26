import { initialState } from "../reducer";
import { SET_SORTING_ITEM_SWITCHER, SetSortingItemSwitcherAction } from "./sortingItemSwitcherActions";

export interface ISortingItemSwitcherState {
  sortingItemSwitcher: boolean;
}

type SortingItemSwitcherActions = SetSortingItemSwitcherAction;

export const sortingItemSwitcherReducer = (state = initialState.sortingItemSwitcher, action: SortingItemSwitcherActions): ISortingItemSwitcherState => {
  switch (action.type) {
    case SET_SORTING_ITEM_SWITCHER:
      return {
        ...state,
        sortingItemSwitcher: action.sortingItemSwitcher
      }
    default:
      return state;
  }
}

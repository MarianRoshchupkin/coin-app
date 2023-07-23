import {initialState} from "../reducer";
import {SET_SORTING_TYPE, SetSortingTypeAction} from "./sortingTypeActions";

export interface ISortingTypeState {
  sortingType: string;
}

type SortingTypeActions = SetSortingTypeAction;

export const sortingTypeReducer = (state = initialState.sortingType, action: SortingTypeActions): ISortingTypeState => {
  switch (action.type) {
    case SET_SORTING_TYPE:
      return {
        ...state,
        sortingType: action.sortingType
      }
    default:
      return state;
  }
}

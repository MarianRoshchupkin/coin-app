import { ActionCreator } from "redux";

export const SET_SORTING_TYPE = 'SET_SORTING_TYPE';

export type SetSortingTypeAction = {
  type: typeof SET_SORTING_TYPE;
  sortingType: string;
}

export const setSortingType: ActionCreator<SetSortingTypeAction> = (sortingType) => ({
  type: SET_SORTING_TYPE,
  sortingType
})

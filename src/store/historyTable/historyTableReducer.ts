import { initialState } from "../reducer";
import { SET_HISTORY_TABLE, SetHistoryTableAction } from "./historyTableActions";

export interface IHistoryTableState {
  historyTable: boolean;
}

type HistoryTableActions = SetHistoryTableAction;

export const historyTableReducer = (state = initialState.historyTable, action: HistoryTableActions): IHistoryTableState => {
  switch (action.type) {
    case SET_HISTORY_TABLE:
      return {
        ...state,
        historyTable: action.historyTable
      }
    default:
      return state;
  }
}

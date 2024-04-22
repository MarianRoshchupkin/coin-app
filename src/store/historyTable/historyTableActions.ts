import { ActionCreator } from "redux";

export const SET_HISTORY_TABLE = 'SET_HISTORY_TABLE';

export type SetHistoryTableAction = {
  type: typeof SET_HISTORY_TABLE;
  historyTable: boolean;
}

export const setHistoryTable: ActionCreator<SetHistoryTableAction> = (historyTable) => ({
  type: SET_HISTORY_TABLE,
  historyTable
})

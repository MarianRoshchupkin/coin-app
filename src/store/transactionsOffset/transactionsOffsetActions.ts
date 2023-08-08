import { ActionCreator } from "redux";

export const SET_TRANSACTIONS_OFFSET = 'SET_TRANSACTIONS_OFFSET';

export type SetTransactionsOffsetAction = {
  type: typeof SET_TRANSACTIONS_OFFSET
  transactionsOffset: number;
}

export const setTransactionsOffset: ActionCreator<SetTransactionsOffsetAction> = (transactionsOffset) => ({
  type: SET_TRANSACTIONS_OFFSET,
  transactionsOffset
})

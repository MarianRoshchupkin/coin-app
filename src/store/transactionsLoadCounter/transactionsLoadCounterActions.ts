import { ActionCreator } from "redux";

export const SET_TRANSACTIONS_LOAD_COUNTER = 'SET_TRANSACTIONS_LOAD_COUNT';

export type SetTransactionsLoadCounterAction = {
  type: typeof SET_TRANSACTIONS_LOAD_COUNTER
  transactionsLoadCounter: number;
}

export const setTransactionsLoadCounter: ActionCreator<SetTransactionsLoadCounterAction> = (transactionsLoadCounter) => ({
  type: SET_TRANSACTIONS_LOAD_COUNTER,
  transactionsLoadCounter
})

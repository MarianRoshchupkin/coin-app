import { SET_TRANSACTIONS_LOAD_COUNTER, SetTransactionsLoadCounterAction } from "./transactionsLoadCounterActions";
import { initialState } from "../reducer";

export interface ITransactionsLoadCounterState {
  transactionsLoadCounter: any;
}

type TransactionsLoadCounterActions = SetTransactionsLoadCounterAction;

export const transactionsLoadCounterReducer = (state = initialState.transactionsLoadCounter.transactionsLoadCounter, action: TransactionsLoadCounterActions): ITransactionsLoadCounterState => {
  switch (action.type) {
    case SET_TRANSACTIONS_LOAD_COUNTER:
      return {
        ...state,
        transactionsLoadCounter: action.transactionsLoadCounter
      }
    default:
      return state;
  }
}

import { SET_TRANSACTIONS_OFFSET, SetTransactionsOffsetAction } from "./transactionsOffsetActions";
import { initialState } from "../reducer";

export interface ITransactionsOffsetState {
  transactionsOffset: any;
}

type TransactionsOffsetActions = SetTransactionsOffsetAction;

export const transactionsOffsetReducer = (state = initialState.transactionsOffset.transactionsOffset, action: TransactionsOffsetActions): ITransactionsOffsetState => {
  switch (action.type) {
    case SET_TRANSACTIONS_OFFSET:
      return {
        ...state,
        transactionsOffset: action.transactionsOffset
      }
    default:
      return state;
  }
}

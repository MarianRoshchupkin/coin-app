import { initialState } from "../reducer";
import { SET_TRANSACTIONS, SetTransactionsAction } from "./transactionsActions";
import { ITransaction } from "../../hooks/useTransactionsData";

export interface ITransactionsState {
  transactions: ITransaction[];
}

type TransactionsActions = SetTransactionsAction;

export const transactionsReducer = (state = initialState.transactions, action: TransactionsActions): ITransactionsState => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.transactions
      }
    default:
      return state;
  }
}

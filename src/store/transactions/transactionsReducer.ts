import { initialState } from "../reducer";
import { ITransaction } from "../../hooks/useTransactionsData";
import {
  SET_TRANSACTIONS,
  SET_TRANSACTIONS_SUCCESS,
  SetTransactionsAction,
  SetTransactionsSuccessAction
} from "./transactionsActions";

export interface ITransactionsState {
  transactions: ITransaction[];
  loading: boolean;
}

type TransactionsActions = SetTransactionsAction | SetTransactionsSuccessAction;

export const transactionsReducer = (state = initialState.transactions, action: TransactionsActions): ITransactionsState => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return {
        ...state,
        loading: true
      }
    case SET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: action.transactions,
        loading: false
      }
    default:
      return state;
  }
}

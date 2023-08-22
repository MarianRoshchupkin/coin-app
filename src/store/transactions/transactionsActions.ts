import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IInitialState } from "../reducer";
import { ITransaction } from "../../hooks/useTransactionsData";
import axios from "axios";

export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';

export type SetTransactionsAction = {
  type: typeof SET_TRANSACTIONS;
  transactions: ITransaction[];
}

export const setTransactions: ActionCreator<SetTransactionsAction> = (transactions) => ({
  type: SET_TRANSACTIONS,
  transactions
})

export const setTransactionsAsync = (): ThunkAction<void, IInitialState, unknown, Action<string>> => (dispatch) => {
  axios.get('/transactions-data')
    .then((res) => {
      const transactions = res.data.transactions;
      dispatch(setTransactions(transactions));
    })
    .catch((error) => {
      console.log(error);
    })
}

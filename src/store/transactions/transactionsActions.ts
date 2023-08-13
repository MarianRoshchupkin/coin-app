import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IInitialState } from "../reducer";
import { ITransaction } from "../../hooks/useTransactionsData";
import axios from "axios";

export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';
export const SET_TRANSACTIONS_SUCCESS = 'SET_TRANSACTIONS_SUCCESS';

export type SetTransactionsAction = {
  type: typeof SET_TRANSACTIONS;
}
export type SetTransactionsSuccessAction = {
  type: typeof SET_TRANSACTIONS_SUCCESS;
  transactions: ITransaction[];
}

export const setTransactions: ActionCreator<SetTransactionsAction> = () => ({
  type: SET_TRANSACTIONS
})
export const setTransactionsSuccess: ActionCreator<SetTransactionsSuccessAction> = (transactions) => ({
  type: SET_TRANSACTIONS_SUCCESS,
  transactions
})

export const setTransactionsAsync = (): ThunkAction<void, IInitialState, unknown, Action<string>> => (dispatch) => {
  dispatch(setTransactions());

  axios.get('/transactions-data')
    .then((res) => {
      const transactions = res.data.transactions;
      dispatch(setTransactionsSuccess(transactions));
    })
    .catch((error) => {
      console.log(error);
    })
}

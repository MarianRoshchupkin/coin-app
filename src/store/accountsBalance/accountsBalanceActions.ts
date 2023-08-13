import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IInitialState } from "../reducer";
import { IAccountBalance } from "../../hooks/useAccountsBalanceData";
import axios from "axios";

export const SET_ACCOUNTS_BALANCE = 'SET_ACCOUNTS_BALANCE';
export const SET_ACCOUNTS_BALANCE_SUCCESS = 'SET_ACCOUNTS_BALANCE_SUCCESS';

export type SetAccountsBalanceAction = {
  type: typeof SET_ACCOUNTS_BALANCE;
}
export type SetAccountsBalanceSuccessAction = {
  type: typeof SET_ACCOUNTS_BALANCE_SUCCESS;
  accountsBalance: IAccountBalance[];
}

export const setAccountsBalance: ActionCreator<SetAccountsBalanceAction> = () => ({
  type: SET_ACCOUNTS_BALANCE
})
export const setAccountsBalanceSuccess: ActionCreator<SetAccountsBalanceSuccessAction> = (accountsBalance) => ({
  type: SET_ACCOUNTS_BALANCE_SUCCESS,
  accountsBalance
})

export const setAccountsBalanceAsync = (number) => (): ThunkAction<void, IInitialState, unknown, Action<string>> => (dispatch) => {
  dispatch(setAccountsBalance());

  axios.get(`/accounts-balance/${number}`)
    .then((res) => {
      const accountsBalance = res.data.accountsBalance;
      dispatch(setAccountsBalanceSuccess(accountsBalance));
    })
    .catch((error) => {
      console.log(error);
    })
}

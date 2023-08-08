import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IInitialState } from "../reducer";
import { IAccountBalance } from "../../hooks/useAccountsBalanceData";
import axios from "axios";

export const SET_ACCOUNTS_BALANCE = 'SET_ACCOUNTS_BALANCE';

export type SetAccountsBalanceAction = {
  type: typeof SET_ACCOUNTS_BALANCE;
  accountsBalance: IAccountBalance[];
}

export const setAccountsBalance: ActionCreator<SetAccountsBalanceAction> = (accountsBalance) => ({
  type: SET_ACCOUNTS_BALANCE,
  accountsBalance
})

export const setAccountsBalanceAsync = (number) => (): ThunkAction<void, IInitialState, unknown, Action<string>> => (dispatch) => {
  axios.get(`/accounts-balance/${number}`)
    .then((res) => {
      const accountsBalance = res.data.accountsBalance;
      dispatch(setAccountsBalance(accountsBalance));
    })
    .catch((error) => {
      console.log(error);
    })
}

import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IInitialState } from "../reducer";
import { IAccount } from "../../hooks/useAccountsData";
import axios from "axios";

export const SET_ACCOUNTS = 'SET_ACCOUNTS';

export type SetAccountsAction = {
  type: typeof SET_ACCOUNTS;
  accounts: IAccount[];
}

export const setAccounts: ActionCreator<SetAccountsAction> = (accounts) => ({
  type: SET_ACCOUNTS,
  accounts
})

export const setAccountsAsync = (): ThunkAction<void, IInitialState, unknown, Action<string>> => (dispatch) => {
  axios.get('/accounts-data')
    .then((res) => {
      const accounts = res.data.accounts;
      dispatch(setAccounts(accounts));
    })
    .catch((error) => {
      console.log(error);
    })
}

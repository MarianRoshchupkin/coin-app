import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IInitialState } from "../reducer";
import { IAccount } from "../../hooks/useAccountsData";
import axios from "axios";

export const SET_ACCOUNTS = 'SET_ACCOUNTS';
export const SET_ACCOUNTS_SUCCESS = 'SET_ACCOUNTS_SUCCESS';

export type SetAccountsAction = {
  type: typeof SET_ACCOUNTS;
}
export type SetAccountsSuccessAction = {
  type: typeof SET_ACCOUNTS_SUCCESS;
  accounts: IAccount[];
}

export const setAccounts: ActionCreator<SetAccountsAction> = () => ({
  type: SET_ACCOUNTS
})
export const setAccountsSuccess: ActionCreator<SetAccountsSuccessAction> = (accounts) => ({
  type: SET_ACCOUNTS_SUCCESS,
  accounts
})

export const setAccountsAsync = (): ThunkAction<void, IInitialState, unknown, Action<string>> => (dispatch) => {
  dispatch(setAccounts());

  axios.get('/accounts-data')
    .then((res) => {
      const accounts = res.data.accounts;
      dispatch(setAccountsSuccess(accounts));
    })
    .catch((error) => {
      console.log(error);
    })
}

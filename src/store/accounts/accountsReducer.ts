import { initialState } from "../reducer";
import { IAccount } from "../../hooks/useAccountsData";
import {
  SET_ACCOUNTS,
  SET_ACCOUNTS_SUCCESS,
  SetAccountsAction,
  SetAccountsSuccessAction
} from "./accountsActions";

export interface IAccountsState {
  accounts: IAccount[];
  loading: boolean;
}

type AccountsActions = SetAccountsAction | SetAccountsSuccessAction;

export const accountsReducer = (state = initialState.accounts, action: AccountsActions): IAccountsState => {
  switch (action.type) {
    case SET_ACCOUNTS:
      return {
        ...state,
        loading: true
      }
    case SET_ACCOUNTS_SUCCESS:
      return {
        ...state,
        accounts: action.accounts,
        loading: false
      }
    default:
      return state;
  }
}

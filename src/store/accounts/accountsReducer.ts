import { initialState } from "../reducer";
import { IAccount } from "../../hooks/useAccountsData";
import { SET_ACCOUNTS, SetAccountsAction } from "./accountsActions";

export interface IAccountsState {
  accounts: IAccount[];
}

type AccountsActions = SetAccountsAction;

export const accountsReducer = (state = initialState.accounts, action: AccountsActions): IAccountsState => {
  switch (action.type) {
    case SET_ACCOUNTS:
      return {
        ...state,
        accounts: action.accounts
      }
    default:
      return state;
  }
}

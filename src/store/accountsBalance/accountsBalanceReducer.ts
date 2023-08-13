import { initialState } from "../reducer";
import { IAccountBalance } from "../../hooks/useAccountsBalanceData";
import {
  SET_ACCOUNTS_BALANCE,
  SET_ACCOUNTS_BALANCE_SUCCESS,
  SetAccountsBalanceAction,
  SetAccountsBalanceSuccessAction
} from "./accountsBalanceActions";

export interface IAccountsBalanceState {
  accountsBalance: IAccountBalance[];
  loading: boolean;
}

type AccountsBalanceActions = SetAccountsBalanceAction | SetAccountsBalanceSuccessAction;

export const accountsBalanceReducer = (state = initialState.accountsBalance, action: AccountsBalanceActions): IAccountsBalanceState => {
  switch (action.type) {
    case SET_ACCOUNTS_BALANCE:
      return {
        ...state,
        loading: true
      }
    case SET_ACCOUNTS_BALANCE_SUCCESS:
      return {
        ...state,
        accountsBalance: action.accountsBalance,
        loading: false
      }
    default:
      return state;
  }
}

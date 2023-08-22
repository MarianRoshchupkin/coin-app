import { initialState } from "../reducer";
import { IAccountBalance } from "../../hooks/useAccountsBalanceData";
import { SET_ACCOUNTS_BALANCE, SetAccountsBalanceAction } from "./accountsBalanceActions";

export interface IAccountsBalanceState {
  accountsBalance: IAccountBalance[];
}

type AccountsBalanceActions = SetAccountsBalanceAction;

export const accountsBalanceReducer = (state = initialState.accountsBalance, action: AccountsBalanceActions): IAccountsBalanceState => {
  switch (action.type) {
    case SET_ACCOUNTS_BALANCE:
      return {
        ...state,
        accountsBalance: action.accountsBalance
      }
    default:
      return state;
  }
}

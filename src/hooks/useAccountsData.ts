import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setAccountsAsync } from "../store/accounts/accountsActions";
import { ITransaction } from "./useTransactionsData";
import { IInitialState } from "../store/reducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export interface IAccount {
  id: string;
  userId: string;
  number: number;
  balance: number;
  transaction: ITransaction;
}

export function useAccountsData() {
  const accounts = useSelector<IInitialState, IAccount[]>(state => state.accounts.accounts);
  const dispatch = useDispatch<ThunkDispatch<IInitialState, void, AnyAction>>();

  useEffect(() => {
    dispatch(setAccountsAsync());
  }, []);

  return accounts;
}

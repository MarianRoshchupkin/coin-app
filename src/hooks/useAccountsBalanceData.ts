import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setAccountsBalanceAsync } from "../store/accountsBalance/accountsBalanceActions";
import { IInitialState } from "../store/reducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export interface IAccountBalance {
  id: string;
  userId: string;
  number: number;
  balance: number;
  date: number;
}

export function useAccountsBalanceData(number: number) {
  const accountsBalance = useSelector<IInitialState, IAccountBalance[]>(state => state.accountsBalance.accountsBalance);
  const dispatch = useDispatch<ThunkDispatch<IInitialState, void, AnyAction>>();

  useEffect(() => {
    dispatch(setAccountsBalanceAsync(number)());
  }, []);

  return accountsBalance;
}

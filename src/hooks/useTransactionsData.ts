import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { IInitialState } from "../store/reducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { setTransactionsAsync } from "../store/transactions/transactionsActions";

export interface ITransaction {
  id: string;
  userId: string;
  sum: number;
  date: number;
  from: number;
  to: number;
}

export function useTransactionsData() {
  const transactions = useSelector<IInitialState, ITransaction[]>(state => state.transactions.transactions);
  const dispatch = useDispatch<ThunkDispatch<IInitialState, void, AnyAction>>();

  useEffect(() => {
    dispatch(setTransactionsAsync());
  }, []);

  return transactions;
}

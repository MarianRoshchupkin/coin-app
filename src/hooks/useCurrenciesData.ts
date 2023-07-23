import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { IInitialState } from "../store/reducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { setCurrenciesAsync } from "../store/currencies/currenciesActions";

export interface ICurrency {
  amount: number;
  code: string;
}

export function useCurrenciesData() {
  const currencies = useSelector<IInitialState, ICurrency[]>(state => state.currencies.currencies);
  const dispatch = useDispatch<ThunkDispatch<IInitialState, void, AnyAction>>();

  useEffect(() => {
    dispatch(setCurrenciesAsync());
  }, []);

  return currencies;
}

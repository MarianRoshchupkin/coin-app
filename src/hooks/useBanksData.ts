import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setBanksAsync } from "../store/banks/banksActions";
import { IInitialState } from "../store/reducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export interface IBank {
  id: string;
  lat: number;
  lon: number;
}

export function useBanksData() {
  const banks = useSelector<IInitialState, IBank[]>(state => state.banks.banks);
  const dispatch = useDispatch<ThunkDispatch<IInitialState, void, AnyAction>>();

  useEffect(() => {
    dispatch(setBanksAsync());
  }, []);

  return banks;
}

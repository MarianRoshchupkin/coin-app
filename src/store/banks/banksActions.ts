import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IInitialState } from "../reducer";
import { IBank } from "../../hooks/useBanksData";
import axios from "axios";

export const SET_BANKS = 'SET_BANKS';
export const SET_BANKS_SUCCESS = 'SET_BANKS_SUCCESS';

export type SetBanksAction = {
  type: typeof SET_BANKS;
}
export type SetBanksSuccessAction = {
  type: typeof SET_BANKS_SUCCESS;
  banks: IBank[];
}

export const setBanks: ActionCreator<SetBanksAction> = () => ({
  type: SET_BANKS
})
export const setBanksSuccess: ActionCreator<SetBanksSuccessAction> = (banks) => ({
  type: SET_BANKS_SUCCESS,
  banks
})

export const setBanksAsync = (): ThunkAction<void, IInitialState, unknown, Action<string>> => (dispatch) => {
  dispatch(setBanks());

  axios.get('/banks-data')
    .then((res) => {
      const banks = res.data.banks;
      dispatch(setBanksSuccess(banks));
    })
    .catch((error) => {
      console.log(error);
    })
}

import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IInitialState } from "../reducer";
import { IBank } from "../../hooks/useBanksData";
import axios from "axios";

export const SET_BANKS = 'SET_BANKS';

export type SetBanksAction = {
  type: typeof SET_BANKS;
  banks: IBank[];
}

export const setBanks: ActionCreator<SetBanksAction> = (banks) => ({
  type: SET_BANKS,
  banks
})

export const setBanksAsync = (): ThunkAction<void, IInitialState, unknown, Action<string>> => (dispatch) => {
  axios.get('/banks-data')
    .then((res) => {
      const banks = res.data.banks;
      dispatch(setBanks(banks));
    })
    .catch((error) => {
      console.log(error);
    })
}

import { initialState } from "../reducer";
import { IBank } from "../../hooks/useBanksData";
import {
  SET_BANKS,
  SET_BANKS_SUCCESS,
  SetBanksAction,
  SetBanksSuccessAction
} from "./banksActions";

export interface IBanksState {
  banks: IBank[];
  loading: boolean;
}

type BanksActions = SetBanksAction | SetBanksSuccessAction;

export const banksReducer = (state = initialState.banks, action: BanksActions): IBanksState => {
  switch (action.type) {
    case SET_BANKS:
      return {
        ...state,
        loading: true
      }
    case SET_BANKS_SUCCESS:
      return {
        ...state,
        banks: action.banks,
        loading: false
      }
    default:
      return state;
  }
}

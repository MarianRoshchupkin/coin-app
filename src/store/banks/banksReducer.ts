import { initialState } from "../reducer";
import { IBank } from "../../hooks/useBanksData";
import { SET_BANKS, SetBanksAction } from "./banksActions";

export interface IBanksState {
  banks: IBank[];
}

type BanksActions = SetBanksAction;

export const banksReducer = (state = initialState.banks, action: BanksActions): IBanksState => {
  switch (action.type) {
    case SET_BANKS:
      return {
        ...state,
        banks: action.banks
      }
    default:
      return state;
  }
}

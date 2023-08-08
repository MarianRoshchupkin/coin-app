import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IInitialState } from "../store/reducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { setUserAsync } from "../store/user/userActions";

export interface IUser {
  id: string;
  username: string;
  password: string;
  currentAccount: number;
  transferError: string;
  loginError: string;
  signupError: string;
  signupSuccess: string;
  login: boolean;
  signup: boolean;
}

export function useUser() {
  const user = useSelector<IInitialState, IUser>(state => state.user.user);
  const dispatch = useDispatch<ThunkDispatch<IInitialState, void, AnyAction>>();

  useEffect(() => {
    dispatch(setUserAsync());
  }, [user]);

  return [user];
}

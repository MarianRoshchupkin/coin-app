import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { IInitialState } from "../store/reducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { limitTransactionsAmount } from "../utils/limit/limitTransactionsAmount";
import { setTransactionsLoadCounter } from "../store/transactionsLoadCounter/transactionsLoadCounterActions";
import { setTransactionsOffset } from "../store/transactionsOffset/transactionsOffsetActions";

export function useLimitedTransactionsData(number) {
  const transactionsOffset = useSelector<IInitialState, number>(state => state.transactionsOffset.transactionsOffset);
  const transactions = limitTransactionsAmount(10, transactionsOffset, number);
  const transactionsLoadCounter = useSelector<IInitialState, number>(state => state.transactionsLoadCounter.transactionsLoadCounter);
  const dispatch = useDispatch<ThunkDispatch<IInitialState, void, AnyAction>>();
  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (transactionsLoadCounter !== 3) {
        if (entries[0].isIntersecting) {
          dispatch(setTransactionsLoadCounter(transactionsLoadCounter + 1));
          dispatch(setTransactionsOffset(transactionsOffset + 10));
        }
      }
    })

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    }
  }, [transactionsLoadCounter, transactionsOffset]);

  return {
    transactions,
    transactionsLoadCounter,
    bottomOfList,
  };
}

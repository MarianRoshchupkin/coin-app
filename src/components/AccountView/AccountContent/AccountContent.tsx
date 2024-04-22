import React, {useEffect} from 'react';
import styles from './accountcontent.css';
import { useSelector, useDispatch } from 'react-redux';
import { IInitialState } from '../../../store/reducer';
import { limitTransactionsAmount } from "../../../utils/limit/limitTransactionsAmount";
import { AccountTransfer } from "./AccountTransfer";
import { AccountBalance } from "./AccountBalance";
import { AccountHistory } from "./AccountHistory";
import { setHistoryTable } from '../../../store/historyTable/historyTableActions';

interface IAccountContentProps {
  number: number;
}

export function AccountContent({ number }: IAccountContentProps) {
  const historyTable = useSelector<IInitialState, boolean>(state => state.historyTable.historyTable);
  const dispatch = useDispatch();
  const limitedTransactions = limitTransactionsAmount(10, 0, number);
  const screenWidthLoaded = window.screen.width;

  if (screenWidthLoaded < 576) {
    dispatch(setHistoryTable(true));
  } else {
    dispatch(setHistoryTable(false));
  }

  useEffect(() => {
    function handleResize () {
      const screenWidthResized = window.screen.width;

      if (screenWidthResized < 576) {
        dispatch(setHistoryTable(true));
      } else {
        dispatch(setHistoryTable(false));
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <AccountTransfer number={number} />
      <AccountBalance number={number} />
      {limitedTransactions.length !== 0 && !historyTable &&
        <AccountHistory transactions={limitedTransactions} number={number} />
      }
    </div>
  );
}

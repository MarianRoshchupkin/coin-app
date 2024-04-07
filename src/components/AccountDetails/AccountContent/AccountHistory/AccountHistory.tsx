import React from 'react';
import styles from './accounthistory.css';
import { useLimitedTransactionsData } from "../../../../hooks/useLimitedTransactionsData";
import { Description } from "../../../Description";
import { AccountTable } from "../../../AccountView/AccountContent/AccountHistory/AccountTable";
import { AccountLoadButton } from "./AccountLoadButton";

interface IAccountHistoryProps {
  number: number;
}

export function AccountHistory({ number }: IAccountHistoryProps) {
  const { transactions, transactionsLoadCounter, bottomOfList } = useLimitedTransactionsData(number);

  return (
    <div className={styles.container} >
      <Description text={'История переводов'} />
      <AccountTable transactions={transactions} number={number} />

      <div ref={bottomOfList} />

      {transactions.length > 30 && transactionsLoadCounter === 3 && (
        <AccountLoadButton />
      )}
    </div>
  );
}

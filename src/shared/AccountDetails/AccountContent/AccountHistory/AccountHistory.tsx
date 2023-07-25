import React from 'react';
import styles from './accounthistory.css';
import { ITransaction } from "../../../../hooks/useTransactionsData";
import { Description } from "../../../Description";
import { AccountTable } from "../../../AccountView/AccountContent/AccountHistory/AccountTable";

interface IAccountHistoryProps {
  transactions: ITransaction[];
  number: number;
}

export function AccountHistory({ transactions, number }: IAccountHistoryProps) {
  return (
    <div className={styles.container} >
      <Description text={'История переводов'} />
      <AccountTable transactions={transactions} number={number} />
    </div>
  );
}

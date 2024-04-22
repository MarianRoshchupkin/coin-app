import React from 'react';
import styles from './accounthistory.css';
import { Description } from "../../../Description";
import { AccountTable } from "./AccountTable";
import { ITransaction } from "../../../../hooks/useTransactionsData";

interface IAccountHistoryProps {
  transactions: ITransaction[];
  number: number;
}

export function AccountHistory({ transactions, number }: IAccountHistoryProps) {
  return (
    <a className={styles.container}>
      <Description text={'История переводов'} />
      <AccountTable transactions={transactions} number={number} />
    </a>
  );
}

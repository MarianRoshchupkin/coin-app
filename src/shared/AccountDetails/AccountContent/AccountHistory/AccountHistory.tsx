import React from 'react';
import styles from './accounthistory.css';
import { ITransaction } from "../../../../hooks/useTransactionsData";
import { Description } from "../../../Description";
import { AccountTable } from "./AccountTable";

interface IAccountHistoryProps {
  transactions: ITransaction[];
  number: number;
}

export function AccountHistory({ transactions, number }: IAccountHistoryProps) {
  return (
    <a className={styles.container} href={`/accounts/${number}/details`} >
      <Description text={'История переводов'} />
      <AccountTable transactions={transactions} number={number} />
    </a>
  );
}

import React from 'react';
import styles from './account.css';
import { TextContent } from "./TextContent";
import { Transaction } from "./Transaction";
import { ITransaction } from "../../../../../hooks/useTransactionsData";

interface IAccountProps {
  number: number;
  balance: number;
  transaction: ITransaction;
  key: string;
}

export function Account({ number, balance, transaction }: IAccountProps) {
  return (
    <li className={styles.account}>
      <TextContent number={number} balance={balance} />
      <Transaction number={number} transaction={transaction} />
    </li>
  );
}

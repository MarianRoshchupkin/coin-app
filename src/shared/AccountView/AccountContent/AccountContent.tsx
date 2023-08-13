import React from 'react';
import styles from './accountcontent.css';
import { AccountTransfer } from "./AccountTransfer";
import { AccountBalance } from "./AccountBalance";
import { AccountHistory } from "./AccountHistory";
import { ITransaction } from "../../../hooks/useTransactionsData";

interface IAccountContentProps {
  transactions: ITransaction[]
  number: number;
}

export function AccountContent({ transactions, number }: IAccountContentProps) {
  return (
    <div className={styles.container}>
      <AccountTransfer number={number} />
      <AccountBalance number={number} />
      {transactions.length !== 0 && (
        <AccountHistory transactions={transactions} number={number} />
      )}
    </div>
  );
}

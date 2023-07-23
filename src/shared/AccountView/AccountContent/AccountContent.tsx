import React from 'react';
import styles from './accountcontent.css';
import { AccountTransfer } from "./AccountTransfer";
import { AccountBalance } from "./AccountBalance";
import { AccountHistory } from "./AccountHistory";
import { filterTransactionsByAccount } from "../../../utils/filtration/filterTransactionsByAccount";

interface IAccountContentProps {
  number: number;
}

export function AccountContent({ number }: IAccountContentProps) {
  const transactions = filterTransactionsByAccount(Number(number));

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

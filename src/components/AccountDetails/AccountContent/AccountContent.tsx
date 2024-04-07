import React from 'react';
import styles from './accountcontent.css';
import { filterTransactionsByAccount } from "../../../utils/filtration/filterTransactionsByAccount";
import { AccountBalance } from "./AccountBalance"
import { AccountTransactions } from "./AccountTransactions";
import { AccountHistory } from "./AccountHistory";

interface IAccountContent {
  number: number;
}

export function AccountContent({ number }: IAccountContent) {
  const transactions = filterTransactionsByAccount(number);

  return (
    <div className={styles.container}>
      <AccountBalance number={number} />
      <AccountTransactions number={number} />
      {transactions.length !== 0 && (
        <AccountHistory number={number} />
      )}
    </div>
  );
}

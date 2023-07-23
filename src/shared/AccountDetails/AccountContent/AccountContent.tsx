import React from 'react';
import styles from './accountcontent.css';
import { AccountTransactions } from "./AccountTransactions";
import { AccountBalance } from "./AccountBalance";
import { AccountHistory } from "./AccountHistory";
import {filterTransactionsByAccount} from "../../../utils/filtration/filterTransactionsByAccount";

interface IAccountContent {
  number: number;
}

export function AccountContent({ number }: IAccountContent) {
  const transactions = filterTransactionsByAccount(Number(number));

  return (
    <div className={styles.container}>
      <AccountBalance number={number} />
      <AccountTransactions number={number} />
      {transactions.length !== 0 && (
        <AccountHistory transactions={transactions} number={number} />
      )}
    </div>
  );
}

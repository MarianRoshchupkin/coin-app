import React from 'react';
import styles from './accountcontent.css';
import { limitTransactionsAmount } from "../../../utils/limit/limitTransactionsAmount";
import { AccountBalance } from "./AccountBalance"
import { AccountTransactions } from "./AccountTransactions";
import { AccountHistory } from "./AccountHistory";

interface IAccountContent {
  number: number;
}

export function AccountContent({ number }: IAccountContent) {
  const limitedTransactions = limitTransactionsAmount(25, number);

  return (
    <div className={styles.container}>
      <AccountBalance number={number} />
      <AccountTransactions number={number} />
      {limitedTransactions.length !== 0 && (
        <AccountHistory transactions={limitedTransactions} number={number} />
      )}
    </div>
  );
}

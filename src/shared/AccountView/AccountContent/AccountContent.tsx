import React from 'react';
import styles from './accountcontent.css';
import { limitTransactionsAmount } from "../../../utils/limit/limitTransactionsAmount";
import { AccountTransfer } from "./AccountTransfer";
import { AccountBalance } from "./AccountBalance";
import { AccountHistory } from "./AccountHistory";

interface IAccountContentProps {
  number: number;
}

export function AccountContent({ number }: IAccountContentProps) {
  const limitedTransactions = limitTransactionsAmount(10, 0, number);

  return (
    <div className={styles.container}>
      <AccountTransfer number={number} />
      <AccountBalance number={number} />
      {limitedTransactions.length !== 0 && (
        <AccountHistory transactions={limitedTransactions} number={number} />
      )}
    </div>
  );
}

import React from 'react';
import styles from './accountdetails.css';
import { AccountBalance } from "./AccountBalance";
import { AccountNumber } from "./AccountNumber";

interface IAccountViewMenuDetailsProps {
  account: number;
  balance: number;
}

export function AccountDetails({ account, balance }: IAccountViewMenuDetailsProps) {
  return (
    <div className={styles.container}>
      <AccountNumber account={account} />
      <AccountBalance balance={balance} />
    </div>
  );
}

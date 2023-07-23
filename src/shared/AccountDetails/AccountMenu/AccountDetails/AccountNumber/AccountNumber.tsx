import React from 'react';
import styles from './accountnumber.css';

interface IAccountViewMenuDetailsBalanceProps {
  account: number;
}

export function AccountNumber({ account }: IAccountViewMenuDetailsBalanceProps) {
  return (
    <h2 className={styles.title}>№ { account }</h2>
  );
}

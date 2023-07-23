import React from 'react';
import styles from './accountbalance.css';
import { Description } from "../../../Description";
import { AccountGraphics } from "./AccountGraphics";

interface IAccountBalanceProps {
  number: number;
}

export function AccountBalance({ number }: IAccountBalanceProps) {
  return (
    <a className={styles.container} href={`/accounts/${number}/details`}>
      <Description text={'Динамика баланса'} />
      <AccountGraphics number={number} />
    </a>
  );
}

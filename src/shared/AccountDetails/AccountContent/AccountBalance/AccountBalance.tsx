import React from 'react';
import styles from './accountbalance.css';
import {Description} from "../../../Description";
import {AccountGraphics} from "./AccountGraphics";

interface IAccountBalanceProps {
  number: number
}

export function AccountBalance({ number }: IAccountBalanceProps) {
  return (
    <div className={styles.container}>
      <Description text={'Динамика баланса'} />
      <AccountGraphics number={number} />
    </div>
  );
}

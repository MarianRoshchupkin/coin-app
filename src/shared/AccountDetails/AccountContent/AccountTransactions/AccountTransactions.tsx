import React from 'react';
import styles from './accounttransactions.css';
import { Description } from "../../../Description";
import { AccountGraphics } from "./AccountGraphics";

interface IAccountTransactionsProps {
  number: number;
}

export function AccountTransactions({ number }: IAccountTransactionsProps) {
  return (
    <div className={styles.container}>
      <Description text={'Соотношение входящих исходящих транзакций'} />
      <AccountGraphics number={number} />
    </div>
  );
}

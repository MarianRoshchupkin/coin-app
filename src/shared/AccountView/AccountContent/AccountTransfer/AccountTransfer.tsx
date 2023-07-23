import React from 'react';
import styles from './accounttransfer.css';
import { Description } from "../../../Description";
import { AccountForm } from "./AccountForm";

interface IAccountTransferProps {
  number: number;
}

export function AccountTransfer({ number }: IAccountTransferProps) {
  return (
    <div className={styles.container}>
      <Description text={'Новый перевод'} />
      <AccountForm number={number} />
    </div>
  );
}

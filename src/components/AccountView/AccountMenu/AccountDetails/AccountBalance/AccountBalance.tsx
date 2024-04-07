import React from 'react';
import styles from './accountbalance.css';
import { RubleIcon } from "../../../../Icons/RubleIcon";

interface IAccountViewMenuDetailsTextProps {
  balance: number;
}

export function AccountBalance({ balance }: IAccountViewMenuDetailsTextProps) {
  return (
    <p className={styles.balance}>
      Баланс
      <span className={styles.number}>
        { balance }
        <RubleIcon size={18} />
      </span>
    </p>
  );
}

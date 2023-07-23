import React from 'react';
import styles from './accountbalance.css';
import { EIcons, Icon } from "../../../../Icons/Icon";

interface IAccountViewMenuDetailsTextProps {
  balance: number;
}

export function AccountBalance({ balance }: IAccountViewMenuDetailsTextProps) {
  return (
    <p className={styles.balance}>
      Баланс
      <span className={styles.number}>
        { balance }
        <Icon name={EIcons.outlinedRuble} size={18} />
      </span>
    </p>
  );
}

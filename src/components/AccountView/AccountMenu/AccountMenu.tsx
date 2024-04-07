import React from 'react';
import styles from './accountmenu.css';
import { AccountTextContent } from "./AccountTextContent";
import { AccountDetails } from "./AccountDetails";

interface IAccountViewMenuProps {
  account: number;
  balance: number;
}

export function AccountMenu({ account, balance }: IAccountViewMenuProps) {
  return (
    <div className={styles.menu}>
      <AccountTextContent />
      <AccountDetails account={account} balance={balance} />
    </div>
  );
}

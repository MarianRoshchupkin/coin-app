import React from 'react';
import styles from './accounts.css';
import { AccountsMenu } from "./AccountsMenu";
import { AccountsListContainer } from "./AccountsListContainer";

export function Accounts() {
  return (
    <div className={styles.container}>
      <AccountsMenu />
      <AccountsListContainer />
    </div>
  );
}

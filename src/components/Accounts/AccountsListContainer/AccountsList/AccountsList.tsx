import React from 'react';
import styles from './accountslist.css';
import { IAccount } from "../../../../hooks/useAccountsData";
import { Account } from "./Account";

interface IAccountsListProps {
  accounts: IAccount[] | []
}

export function AccountsList({ accounts }: IAccountsListProps) {
  return (
    <ul className={styles.list}>
      {accounts.map((account) => (
        <Account
          number={account.number}
          balance={account.balance}
          transaction={account.transaction}
          key={account.id}
        />
      ))}
    </ul>
  );
}

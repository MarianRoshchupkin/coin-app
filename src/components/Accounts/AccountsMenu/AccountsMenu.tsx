import React from 'react';
import styles from './accountsmenu.css';
import { Title } from "../../Title";
import { AccountsDropdown } from "./AccountsDropdown";
import { AccountsButton } from "./AccountsButton";
import { useAccountsData } from "../../../hooks/useAccountsData";

export function AccountsMenu() {
  const accounts = useAccountsData();

  return (
    <div className={styles.menu}>
      <Title title='Ваши счета' />
      {accounts.length !== 0 && <AccountsDropdown />}
      <AccountsButton />
    </div>
  );
}

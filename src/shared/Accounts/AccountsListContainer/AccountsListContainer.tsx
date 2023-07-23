import React from 'react';
import styles from './accountslistcontainer.css';
import { useSelector } from "react-redux";
import { IInitialState } from "../../../store/reducer";
import { IAccount } from "../../../hooks/useAccountsData";
import { sortAccountsByAccount } from "../../../utils/sorting/sortAccountsByAccount";
import { sortAccountsByBalance } from "../../../utils/sorting/sortAccountsByBalance";
import { mergeAccountsAndLastTransactions } from "../../../utils/merger/mergeAccountAndLastTransaction";
import { AccountsList } from "./AccountsList";

export function AccountsListContainer() {
  const sortingKind = useSelector<IInitialState, string>(state => state.sortingType.sortingType);
  let accounts: IAccount[] | [];

  if (sortingKind === 'По номеру') {
    accounts = sortAccountsByAccount();
  }

  if (sortingKind === 'По балансу') {
    accounts = sortAccountsByBalance();
  }

  if (sortingKind === '') {
    accounts = mergeAccountsAndLastTransactions();
  }

  return (
    <AccountsList accounts={accounts} />
  );
}

import React from 'react';
import styles from './accountslistcontainer.css';
import { useSelector } from "react-redux";
import { IInitialState } from "../../../store/reducer";
import { IAccount } from "../../../hooks/useAccountsData";
import { sortAccountsByAccount } from "../../../utils/sorting/sortAccountsByAccount";
import { sortAccountsByBalance } from "../../../utils/sorting/sortAccountsByBalance";
import { sortAccountsByTransaction } from "../../../utils/sorting/sortAccountsByTransaction";
import { mergeAccountsAndLastTransactions } from "../../../utils/merging/mergeAccountAndLastTransaction";
import { AccountsList } from "./AccountsList";

export function AccountsListContainer() {
  const sortingType = useSelector<IInitialState, string>(state => state.sortingType.sortingType);
  let accounts: IAccount[] | [];

  if (sortingType === 'По номеру') {
    accounts = sortAccountsByAccount();
  }

  if (sortingType === 'По балансу') {
    accounts = sortAccountsByBalance();
  }

  if (sortingType === 'По последней транзакции') {
    accounts = sortAccountsByTransaction();
  }

  if (sortingType === '') {
    accounts = mergeAccountsAndLastTransactions();
  }

  return (
    <AccountsList accounts={accounts} />
  );
}

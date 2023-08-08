import React from 'react';
import styles from './accountsdropdown.css';
import { useSelector } from "react-redux";
import { IInitialState } from "../../../../store/reducer";
import { Dropdown } from "../../../Dropdown";
import { ArrowUpIcon } from "../../../Icons/ArrowUpIcon";
import { ArrowDownIcon } from "../../../Icons/ArrowDownIcon";
import { AccountsListContainer } from "./AccountsListContainer";

export function AccountsDropdown() {
  const dropdownSwitcher = useSelector<IInitialState, boolean>(state => state.dropdownSwitcher.dropdownSwitcher);

  return (
    <div className={styles.container}>
      <Dropdown button={
        <button className={styles.button} >
          Сортировка
          {dropdownSwitcher
            ? (<span className={styles.icon}><ArrowUpIcon size={24} /></span>)
            : (<span className={styles.icon}><ArrowDownIcon size={24} /></span>)
          }
        </button>
      }>
        <AccountsListContainer />
      </Dropdown>
    </div>
  );
}

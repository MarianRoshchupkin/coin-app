import React from 'react';
import styles from './accountsdropdown.css';
import { useSelector } from "react-redux";
import { IInitialState } from "../../../../store/reducer";
import { Dropdown } from "../../../Dropdown";
import { EIcons, Icon } from "../../../Icons/Icon";
import { AccountsListContainer } from "./AccountsListContainer";

export function AccountsDropdown() {
  const dropdownSwitcher = useSelector<IInitialState, boolean>(state => state.dropdownSwitcher.dropdownSwitcher);

  return (
    <div className={styles.container}>
      <Dropdown button={
        <button className={styles.button} >
          Сортировка
          {dropdownSwitcher
            ? (<span className={styles.icon}><Icon name={EIcons.sortingArrowUp} size={24} /></span>)
            : (<span className={styles.icon}><Icon name={EIcons.sortingArrowDown} size={24} /></span>)
          }
        </button>
      }>
        <AccountsListContainer />
      </Dropdown>
    </div>
  );
}

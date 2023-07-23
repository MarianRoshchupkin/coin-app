import React, { useState } from 'react';
import styles from './accountsdropdown.css';
import { Dropdown } from "../../../Dropdown";
import { EIcons, Icon } from "../../../Icons/Icon";
import { AccountsListContainer } from "./AccountsListContainer";

export function AccountsDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Dropdown button={
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => setIsDropdownOpen(!isDropdownOpen) }>
            Сортировка
            {isDropdownOpen ? (
              <span className={styles.icon}>
              <Icon name={EIcons.sortingArrowUp} size={24} />
            </span>
            ) : (
              <span className={styles.icon}>
              <Icon name={EIcons.sortingArrowDown} size={24} />
            </span>
            )}
          </button>
        </div>
      }>
        <AccountsListContainer />
      </Dropdown>
    </div>
  );
}

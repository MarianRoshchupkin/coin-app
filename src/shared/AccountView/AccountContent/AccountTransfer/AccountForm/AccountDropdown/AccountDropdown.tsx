import React, {useState} from 'react';
import styles from './accountdropdown.css';
import {Dropdown} from "../../../../../Dropdown";
import {EIcons, Icon} from "../../../../../Icons/Icon";
import {AccountsListContainer} from "../../../../../Accounts/AccountsMenu/AccountsDropdown/AccountsListContainer";
import {retrieveAllAccountsNumbers} from "../../../../../../utils/retrieving/retrieveAllAccountsNumbers";
import {GenericList} from "../../../../../GenericList";
import {AccountList} from "./AccountList";

export function AccountDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const accounts = retrieveAllAccountsNumbers();

  return (
    <label className={styles.label}>
      <span className={styles.span}>Номер счёта получателя</span>
      <div className={styles.container}>
        <Dropdown button={
          <div className={styles.buttonContainer}>
            <p className={styles.button} onClick={() => setIsDropdownOpen(!isDropdownOpen) }>
              Placeholder
              {isDropdownOpen ? (
                <span className={styles.icon}>
                  <Icon name={EIcons.sortingArrowUp} size={24} />
                </span>
              ) : (
                <span className={styles.icon}>
                  <Icon name={EIcons.sortingArrowDown} size={24} />
                </span>
              )}
            </p>
          </div>
        }>
          <AccountList list={accounts} />
        </Dropdown>
      </div>
    </label>
  );
}

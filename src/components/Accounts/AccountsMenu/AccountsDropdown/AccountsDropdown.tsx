import React from 'react';
import styles from './accountsdropdown.css';
import { useSelector } from "react-redux";
import { IInitialState } from "../../../../store/reducer";
import { setSortingDropdownSwitcher } from "../../../../store/sortingDropdownSwitcher/sortingDropdownSwitcherActions";
import { setSortingItemSwitcher } from "../../../../store/sortingItemSwitcher/sortingItemSwitcherActions";
import { setSortingType } from "../../../../store/sortingType/sortingTypeActions";
import { Dropdown } from "../../../Dropdown";
import { ArrowUpIcon } from "../../../Icons/ArrowUpIcon";
import { ArrowDownIcon } from "../../../Icons/ArrowDownIcon";
import { DropdownListContainer } from "../../../DropdownListContainer";
import { AccountsList } from "./AccountsList";

export function AccountsDropdown() {
  const dropdownSwitcher = useSelector<IInitialState, boolean>(state => state.sortingDropdownSwitcher.sortingDropdownSwitcher);
  const itemSwitcher = useSelector<IInitialState, boolean>(state => state.sortingItemSwitcher.sortingItemSwitcher);
  const type = useSelector<IInitialState, string>(state => state.sortingType.sortingType);

  return (
    <div className={styles.container}>
      <Dropdown
        dropdownSwitcher={dropdownSwitcher}
        setDropdownSwitcher={setSortingDropdownSwitcher}
        button={
          <button className={styles.button}>
            {type !== ''
              ? <span className={styles.buttonDesc}>{ type }</span>
              : <span className={styles.buttonDesc}>Сортировка</span>
            }
            {dropdownSwitcher
              ? <span className={styles.icon}><ArrowUpIcon size={24} /></span>
              : <span className={styles.icon}><ArrowDownIcon size={24} /></span>
            }
          </button>
        }
      >
        <DropdownListContainer
          targetElementClass={'sortItem'}
          itemSwitcher={itemSwitcher}
          type={type}
          setItemSwitcher={setSortingItemSwitcher}
          setType={setSortingType}
          renderList={() => <AccountsList itemSwitcher={itemSwitcher} type={type} />}
        />
      </Dropdown>
    </div>
  );
}

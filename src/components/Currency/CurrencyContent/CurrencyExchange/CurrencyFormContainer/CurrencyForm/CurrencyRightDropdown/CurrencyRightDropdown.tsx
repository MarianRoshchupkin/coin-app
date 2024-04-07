import React from 'react';
import styles from './currencyrightdropdown.css';
import { useSelector } from "react-redux";
import { IInitialState } from "../../../../../../../store/reducer";
import { setCurrencyToDropdownSwitcher } from "../../../../../../../store/CurrencyToDropdownSwitcher/currencyToDropdownSwitcherActions";
import { setCurrencyToItemSwitcher } from "../../../../../../../store/CurrencyToItemSwitcher/currencyToItemSwitcherActions";
import { setCurrencyToType } from "../../../../../../../store/CurrencyToType/currencyToTypeActions";
import { Dropdown } from "../../../../../../Dropdown";
import { ArrowUpIcon } from "../../../../../../Icons/ArrowUpIcon";
import { ArrowDownIcon } from "../../../../../../Icons/ArrowDownIcon";
import { DropdownListContainer } from "../../../../../../DropdownListContainer";
import { CurrencyList } from "../CurrencyList";

export function CurrencyRightDropdown() {
  const dropdownSwitcher = useSelector<IInitialState, boolean>(state => state.currencyToDropdownSwitcher.currencyToDropdownSwitcher);
  const itemSwitcher = useSelector<IInitialState, boolean>(state => state.currencyToItemSwitcher.currencyToItemSwitcher);
  const type = useSelector<IInitialState, string>(state => state.currencyToType.currencyToType);

  return (
    <div className={styles.container}>
      <Dropdown
        dropdownSwitcher={dropdownSwitcher}
        setDropdownSwitcher={setCurrencyToDropdownSwitcher}
        button={
          <button className={styles.button} type="button">
            {type !== ''
              ? (<span className={styles.buttonDesc}>{ type }</span>)
              : (<span className={styles.buttonDesc}>...</span>)
            }
            {dropdownSwitcher
              ? (<span className={styles.icon}><ArrowUpIcon size={24} /></span>)
              : (<span className={styles.icon}><ArrowDownIcon size={24} /></span>)
            }
          </button>
        }
      >
        <DropdownListContainer
          targetElementClass={'currencyRightItem'}
          itemSwitcher={itemSwitcher}
          type={type}
          setItemSwitcher={setCurrencyToItemSwitcher}
          setType={setCurrencyToType}
          renderList={() => (
            <CurrencyList
              currencyClass={'currencyRightItem'}
              itemSwitcher={itemSwitcher}
              type={type}
            />
          )}
        />
      </Dropdown>
    </div>
  );
}

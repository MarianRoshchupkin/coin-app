import React from 'react';
import styles from './currencyleftdropdown.css';
import { useSelector } from "react-redux";
import { IInitialState } from "../../../../../../../store/reducer";
import { setCurrencyFromDropdownSwitcher } from "../../../../../../../store/CurrencyFromDropdownSwitcher/currencyFromDropdownSwitcherActions";
import { setCurrencyFromItemSwitcher } from "../../../../../../../store/CurrencyFromItemSwitcher/currencyFromItemSwitcherActions";
import { setCurrencyFromType } from "../../../../../../../store/CurrencyFromType/currencyFromTypeActions";
import { Dropdown } from "../../../../../../Dropdown";
import { ArrowUpIcon } from "../../../../../../Icons/ArrowUpIcon";
import { ArrowDownIcon } from "../../../../../../Icons/ArrowDownIcon";
import { DropdownListContainer } from "../../../../../../DropdownListContainer";
import { CurrencyList } from "../CurrencyList";

export function CurrencyLeftDropdown() {
  const dropdownSwitcher = useSelector<IInitialState, boolean>(state => state.currencyFromDropdownSwitcher.currencyFromDropdownSwitcher);
  const itemSwitcher = useSelector<IInitialState, boolean>(state => state.currencyFromItemSwitcher.currencyFromItemSwitcher);
  const type = useSelector<IInitialState, string>(state => state.currencyFromType.currencyFromType);

  return (
    <div className={styles.container}>
      <Dropdown
        dropdownSwitcher={dropdownSwitcher}
        setDropdownSwitcher={setCurrencyFromDropdownSwitcher}
        button={
          <button className={styles.button} type="button">
            {type !== ''
              ? <span className={styles.buttonDesc}>{ type }</span>
              : <span className={styles.buttonDesc}>...</span>
            }
            {dropdownSwitcher
              ? <span className={styles.icon}><ArrowUpIcon size={24} /></span>
              : <span className={styles.icon}><ArrowDownIcon size={24} /></span>
            }
          </button>
        }
      >
        <DropdownListContainer
          targetElementClass={'currencyLeftItem'}
          itemSwitcher={itemSwitcher}
          type={type}
          setItemSwitcher={setCurrencyFromItemSwitcher}
          setType={setCurrencyFromType}
          renderList={() =>
            <CurrencyList
              currencyClass={'currencyLeftItem'}
              itemSwitcher={itemSwitcher}
              type={type}
            />
          }
        />
      </Dropdown>
    </div>
  );
}

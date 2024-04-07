import React from 'react';
import styles from './acccountslist.css';
import { CheckIcon } from "../../../../Icons/CheckIcon";

interface IMenuItemsListProps {
  itemSwitcher: boolean;
  type: string;
}

export function AccountsList({ itemSwitcher, type }: IMenuItemsListProps) {
  const sortingTypes = ['По номеру', 'По балансу', 'По последней транзакции'];

  return (
    <ul className={styles.list}>
      {sortingTypes.map((sortingType) => (
        <li className={`sortItem ${styles.item}`} key={sortingType}>
          <a className={styles.link}>
            <span className={styles.desc}>{ sortingType }</span>
            {itemSwitcher && type === sortingType && (
              <span className={styles.icon}>
                <CheckIcon size={24} />
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

import React from 'react';
import styles from './acccountslist.css';
import { CheckIcon } from "../../../../../Icons/CheckIcon";

interface IMenuItemsListProps {
  sortingItemSwitcher: boolean;
  sortingType: string;
}

export function AccountsList({ sortingItemSwitcher, sortingType }: IMenuItemsListProps) {
  return (
    <ul className={styles.list}>
      <li className={`sortItem ${styles.item}`}>
        <a className={styles.link}>
          <span className={styles.desc}>По номеру</span>
          {sortingItemSwitcher && sortingType === 'По номеру' && (
            <span className={styles.icon}>
              <CheckIcon size={24} />
            </span>
          )}
        </a>
      </li>
      <li className={`sortItem ${styles.item}`}>
        <a className={styles.link}>
          <span className={styles.desc}>По балансу</span>
          {sortingItemSwitcher && sortingType === 'По балансу' && (
            <span className={styles.icon}>
              <CheckIcon size={24} />
            </span>
          )}
        </a>
      </li>
      <li className={`sortItem ${styles.item}`}>
        <a className={styles.link}>
          <span className={styles.desc}>По последней транзакции</span>
          {sortingItemSwitcher && sortingType === 'По последней транзакции' && (
            <span className={styles.icon}>
              <CheckIcon size={24} />
            </span>
          )}
        </a>
      </li>
    </ul>
  );
}

import React from 'react';
import styles from './acccountslist.css';
import { EIcons, Icon } from "../../../../../Icons/Icon";

interface IMenuItemsListProps {
  switcher: boolean;
  sortingKind: string;
}

export function AccountsList({ switcher, sortingKind }: IMenuItemsListProps) {
  return (
    <ul className={styles.list}>
      <li className={`sortItem ${styles.item}`}>
        <a className={styles.link}>По номеру</a>
        {switcher && sortingKind === 'По номеру' && (
          <span className={styles.icon}>
          <Icon name={EIcons.outlinedCheck} size={24} />
        </span>
        )}
      </li>
      <li className={`sortItem ${styles.item}`}>
        <a className={styles.link}>По балансу</a>
        {switcher && sortingKind === 'По балансу' && (
          <span className={styles.icon}>
          <Icon name={EIcons.outlinedCheck} size={24} />
        </span>
        )}
      </li>
      <li className={`sortItem ${styles.item}`}>
        <a className={styles.link}>По последней транзакции</a>
        {switcher && sortingKind === 'По последней транзакции' && (
          <span className={styles.icon}>
          <Icon name={EIcons.outlinedCheck} size={24} />
        </span>
        )}
      </li>
    </ul>
  );
}

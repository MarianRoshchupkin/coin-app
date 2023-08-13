import React from 'react';
import styles from './navblock.css';

export function NavBlock() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a className={styles.link} href="/banks">Банкоматы</a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="/accounts">Счета</a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="/logout">Выйти</a>
      </li>
    </ul>
  );
}

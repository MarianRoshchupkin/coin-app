import React from 'react';
import styles from './accountlist.css';

interface IAccountListProps {
  list: { id: string, number: number }[];
}

export function AccountList({ list }: IAccountListProps) {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <li className={styles.item} key={item.id}>
          <p className={styles.desc}>{item.number}</p>
        </li>
      ))}
    </ul>
  );
}

import React from 'react';
import styles from './accountsum.css';

export function AccountSum() {
  return (
    <label className={styles.label}>
      <span className={styles.span}>Сумма перевода</span>
      <input className={styles.input} type="text" name="sum" placeholder="Placeholder" />
    </label>
  );
}

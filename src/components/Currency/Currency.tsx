import React from 'react';
import styles from './currency.css';
import { CurrencyMenu } from "./CurrencyMenu";
import { CurrencyContent } from "./CurrencyContent";

export function Currency() {
  return (
    <div className={styles.container}>
      <CurrencyMenu />
      <CurrencyContent />
    </div>
  );
}

import React from 'react';
import styles from './currencydetails.css';
import { CurrencyMenu } from "./CurrencyMenu";
import { CurrencyContent } from "./CurrencyContent";

export function CurrencyDetails() {
  return (
    <div className={styles.container}>
      <CurrencyMenu />
      <CurrencyContent />
    </div>
  );
}

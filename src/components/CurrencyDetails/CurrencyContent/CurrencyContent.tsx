import React from 'react';
import styles from './currencycontent.css';
import { CurrencyExchangeRate } from "./CurrencyExchangeRate";

export function CurrencyContent() {
  return (
    <div className={styles.container}>
      <CurrencyExchangeRate />
    </div>
  );
}

import React from 'react';
import styles from './currencycontent.css';
import { Currencies } from "./Currencies";
import { CurrencyExchangeRate } from "./CurrenctyExchangeRate";
import { CurrencyExchange } from "./CurrencyExchange";

export function CurrencyContent() {
  return (
    <div className={styles.container}>
      <CurrencyExchange />
      <CurrencyExchangeRate />
      <Currencies />
    </div>
  );
}

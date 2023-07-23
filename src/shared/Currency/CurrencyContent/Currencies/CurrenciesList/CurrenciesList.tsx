import React from 'react';
import styles from './currencieslist.css';
import { useCurrenciesData } from "../../../../../hooks/useCurrenciesData";

export function CurrenciesList() {
  const currencies = useCurrenciesData();

  return (
    <div className={styles.container}>
      {currencies.map((currency) => (
        <div className={styles.line} key={currency.code}>
          <p className={styles.currency}>{ currency.code }</p>
          <span className={styles.pointLine} />
          <p className={styles.value}>{ currency.amount }</p>
        </div>
      ))}
    </div>
  );
}

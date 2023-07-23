import React from 'react';
import styles from './currencyexchange.css';
import { Description } from "../../../Description";

export function CurrencyExchange() {
  return (
    <div className={styles.container}>
      <Description text={'Обмен валюты'} />
    </div>
  );
}

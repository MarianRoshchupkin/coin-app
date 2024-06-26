import React from 'react';
import styles from './currencyexchange.css';
import { Description } from "../../../Description";
import { CurrencyFormContainer } from "./CurrencyFormContainer";

export function CurrencyExchange() {
  return (
    <div className={styles.container}>
      <div>
        <Description text={'Обмен валюты'} />
      </div>
      <CurrencyFormContainer />
    </div>
  );
}

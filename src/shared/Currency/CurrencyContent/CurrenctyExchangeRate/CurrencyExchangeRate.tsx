import React from 'react';
import styles from './currencyexchangerate.css';
import { Description } from "../../../Description";
import { CurrenciesPairsList } from "./CurrenciesPairsList";

export function CurrencyExchangeRate() {
  return (
    <div className={styles.container}>
      <Description text={'Изменение курсов в реальном времени'} />
      {/*<CurrenciesPairsList />*/}
    </div>
  );
}

import React from 'react';
import styles from './currencyexchangerate.css';
import { limitCurrenciesExchange } from "../../../../utils/limit/limitCurrenciesExchanges";
import { Description } from "../../../Description";
import { CurrenciesPairsList } from "./CurrenciesPairsList";

export function CurrencyExchangeRate() {
  const currenciesExchange = limitCurrenciesExchange();

  return (
    <a className={styles.container} href={`/currency/details`} >
      <Description text={'Изменение курсов в реальном времени'} />
      <CurrenciesPairsList currenciesExchange={currenciesExchange} />
    </a>
  );
}

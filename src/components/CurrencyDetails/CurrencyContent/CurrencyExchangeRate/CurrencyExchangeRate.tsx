import React from 'react';
import styles from './currencyexchangerate.css';
import { useCurrenciesExchangeData } from "../../../../hooks/useCurrenciesExchangeData";
import { Description } from "../../../Description";
import { CurrenciesPairsList } from "../../../Currency/CurrencyContent/CurrenctyExchangeRate/CurrenciesPairsList";

export function CurrencyExchangeRate() {
  const currenciesExchange = useCurrenciesExchangeData();

  return (
    <div className={styles.container}>
      <Description text={'Изменение курсов в реальном времени'} />
      {currenciesExchange !== null
        ? <CurrenciesPairsList currenciesExchange={currenciesExchange} />
        : <CurrenciesPairsList currenciesExchange={[]} />
      }
    </div>
  );
}

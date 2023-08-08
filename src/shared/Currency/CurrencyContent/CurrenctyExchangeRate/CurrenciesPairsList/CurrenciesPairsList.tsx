import React from 'react';
import styles from './currenciespairslist.css';
import { useCurrenciesExchangeRateData } from "../../../../../hooks/useCurrenciesExchangeRateData";
import { ArrowUpGreenIcon } from "../../../../Icons/ArrowUpGreenIcon";
import { ArrowDownRedIcon } from "../../../../Icons/ArrowDownRedIcon";

export function CurrenciesPairsList() {
  const currenciesExchangeRates = useCurrenciesExchangeRateData();

  return (
    <div className={styles.container}>
      {currenciesExchangeRates.map((currencyExchangeRate) => (
        <div className={styles.line} key={currencyExchangeRate.id}>
          <p className={styles.currency}>
            { currencyExchangeRate.from }/{ currencyExchangeRate.to }
          </p>
          {currencyExchangeRate.change === 1
            ? (<span className={`${styles.pointLine} ${styles.pointLineGreen}`} />)
            : (<span className={`${styles.pointLine} ${styles.pointLineRed}`} />)
          }
          <p className={styles.value}>
            <span className={styles.amount}>{ currencyExchangeRate.rate }</span>
            {currencyExchangeRate.change === 1
              ? (<ArrowUpGreenIcon size={20} />)
              : (<ArrowDownRedIcon size={20} />)
            }
          </p>
        </div>
      ))}
    </div>
  );
}

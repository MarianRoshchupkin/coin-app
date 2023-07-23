import React from 'react';
import styles from './currenciespairslist.css';
import { useCurrenciesExchangeRateData } from "../../../../../hooks/useCurrenciesExchangeRateData";
import { EIcons, Icon } from "../../../../Icons/Icon";

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
              ? (<Icon name={EIcons.arrowUpGreen} size={20} />)
              : (<Icon name={EIcons.arrowDownRed} size={20} />)
            }
          </p>
        </div>
      ))}
    </div>
  );
}

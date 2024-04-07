import React from 'react';
import styles from './currenciespairslist.css';
import { ICurrenciesExchange } from "../../../../../hooks/useCurrenciesExchangeData";
import { ArrowUpGreenIcon } from "../../../../Icons/ArrowUpGreenIcon";
import { ArrowDownRedIcon } from "../../../../Icons/ArrowDownRedIcon";

interface ICurrenciesPairsListProps {
  currenciesExchange: ICurrenciesExchange[];
}

export function CurrenciesPairsList({ currenciesExchange }: ICurrenciesPairsListProps) {
  return (
    <div className={styles.container}>
      {currenciesExchange.length !== 0
        ? currenciesExchange.map((currencyExchange) => (
            <div className={styles.line} key={currencyExchange.id}>
              <p className={styles.currency}>
                { currencyExchange.from }/{ currencyExchange.to }
              </p>
              {currencyExchange.change === 1
                ? (<span className={`${styles.pointLine} ${styles.pointLineGreen}`} />)
                : (<span className={`${styles.pointLine} ${styles.pointLineRed}`} />)
              }
              <p className={styles.value}>
                <span className={styles.amount}>{ currencyExchange.rate }</span>
                {currencyExchange.change === 1
                  ? (<ArrowUpGreenIcon size={20} />)
                  : (<ArrowDownRedIcon size={20} />)
                }
              </p>
            </div>
          ))
        : (
            <div className={styles.loader}>
              <span className={styles.desc}>Загрузка...</span>
            </div>
          )
      }
    </div>
  );
}

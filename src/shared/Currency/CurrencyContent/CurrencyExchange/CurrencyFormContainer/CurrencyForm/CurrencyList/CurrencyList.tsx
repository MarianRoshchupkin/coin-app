import React from 'react';
import styles from './currencylist.css';
import { CheckIcon } from "../../../../../../Icons/CheckIcon";

interface ICurrencyListProps {
  currencyClass: string;
  itemSwitcher: boolean;
  type: string;
}

export function CurrencyList({ currencyClass, itemSwitcher, type }: ICurrencyListProps) {
  const currenciesCodes = ['AUD', 'BTC', 'BYR', 'CAD', 'CHF', 'CNH', 'ETH', 'EUR', 'GBP', 'HKD', 'JPY', 'NZD', 'RUB', 'UAH', 'USD'];

  return (
    <ul className={styles.list}>
      {currenciesCodes.map((currencyCode) => (
        <li className={`${currencyClass} ${styles.item}`} key={currencyCode}>
          <a className={styles.link}>
            <span className={styles.desc}>{ currencyCode }</span>
            {itemSwitcher && type === currencyCode && (
              <span className={styles.icon}>
                <CheckIcon size={24} />
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

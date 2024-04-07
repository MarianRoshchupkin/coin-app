import React from 'react';
import styles from './currencies.css';
import { Description } from "../../../Description";
import { CurrenciesList } from "./CurrenciesList";

export function Currencies() {
  return (
    <div className={styles.container}>
      <Description text={'Ваши валюты'} />
      <CurrenciesList />
    </div>
  );
}

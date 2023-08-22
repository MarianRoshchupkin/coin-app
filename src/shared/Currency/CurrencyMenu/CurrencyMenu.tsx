import React from 'react';
import styles from './currencymenu.css';
import { Title } from "../../Title";

export function CurrencyMenu() {
  return (
    <div className={styles.menu}>
      <Title title={'Валютный обмен'} />
    </div>
  );
}

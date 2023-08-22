import React from 'react';
import styles from './currencymenu.css';
import { Title } from "../../Title";
import { Button } from "../../Button";

export function CurrencyMenu() {
  return (
    <div className={styles.menu}>
      <Title title={'Валютные катировки'} />
      <Button link={'/currency'} text={'Вернуться назад'} />
    </div>
  );
}

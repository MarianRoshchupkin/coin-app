import React from 'react';
import styles from './banksmenu.css';
import { Title } from "../../Title";

export function BanksMenu() {
  return (
    <div className={styles.menu}>
      <Title title={'Карта банкоматов'} />
    </div>
  );
}

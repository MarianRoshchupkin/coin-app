import React from 'react';
import styles from './accountbutton.css';
import { EIcons, Icon } from "../../../../../Icons/Icon";

export function AccountButton() {
  return (
    <button className={styles.button}>
      <Icon name={EIcons.outlinedMail} size={24} />
      <span className={styles.desc}>Отправить</span>
    </button>
  );
}

import React from 'react';
import styles from './accountsbutton.css';
import { EIcons, Icon } from "../../../Icons/Icon";

export function AccountsButton() {
  return (
    <form className={styles.form} method="post" action="/create-account" encType="application/x-www-form-urlencoded">
      <button className={styles.button}>
        <Icon name={EIcons.outlinedPlus} size={24} />
        <span className={styles.desc}>Создать новый счёт</span>
      </button>
    </form>
  );
}

import React from 'react';
import styles from './accountsbutton.css';
import { EIcons, Icon } from "../../../Icons/Icon";

export function AccountsButton() {
  return (
    <form className={styles.form} method="post" action="/create-account" encType="application/x-www-form-urlencoded">
      <button className={styles.button}>
        <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4.00001L12 12M12 12L12 20M12 12L20 12M12 12L4 12" stroke="white" strokeWidth="2"/>
        </svg>
        <span className={styles.desc}>Создать новый счёт</span>
      </button>
    </form>
  );
}

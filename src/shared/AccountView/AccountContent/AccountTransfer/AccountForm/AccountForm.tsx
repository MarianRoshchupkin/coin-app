import React from 'react';
import styles from './accountform.css';
import { AccountButton } from "./AccountButton";

interface IAccountFormProps {
  number: number;
}

export function AccountForm({ number }: IAccountFormProps) {
  return (
    <form className={styles.form} method="post" action={`/transfer-funds`} encType="application/x-www-form-urlencoded">
      <input style={{ display: "none" }} type="text" name="from" value={number} />
      <label className={styles.label}>
        <span className={styles.desc}>Номер счёта получателя</span>
        <input className={styles.input} type="text" name="to" placeholder="Placeholder" />
      </label>
      <label className={styles.label}>
        <span className={styles.desc}>Сумма перевода</span>
        <input className={styles.input} type="text" name="sum" placeholder="Placeholder" />
      </label>

      <AccountButton />
    </form>
  );
}

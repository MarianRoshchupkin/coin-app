import React from 'react';
import styles from './accountform.css';

interface IAccountFormProps {
  number: number;
}

export function AccountForm({ number }: IAccountFormProps) {
  const NOOP = () => {};

  return (
    <form className={styles.form} method="post" action={`/transfer-funds`} encType="application/x-www-form-urlencoded">
      <input style={{ display: "none" }} type="text" name="from" value={number} onChange={NOOP} />
      <label className={styles.label}>
        <span className={styles.desc}>Номер счёта получателя</span>
        <input className={`${styles.input} numberInput`} type="text" name="to" maxLength={15} placeholder="Placeholder" />
      </label>
      <label className={styles.label}>
        <span className={styles.desc}>Сумма перевода</span>
        <input className={`${styles.input} sumInput`} type="text" name="sum" placeholder="Placeholder" />
      </label>
      <button className={`${styles.button} formButton`}>
        <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="white"
            d="M20 20H4C2.89543 20 2 19.1046 2 18V5.913C2.04661 4.84255 2.92853 3.99899 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20ZM4 7.868V18H20V7.868L12 13.2L4 7.868ZM4.8 6L12 10.8L19.2 6H4.8Z"
          />
        </svg>
        <span className={styles.buttonDesc}>Отправить</span>
      </button>
    </form>
  );
}
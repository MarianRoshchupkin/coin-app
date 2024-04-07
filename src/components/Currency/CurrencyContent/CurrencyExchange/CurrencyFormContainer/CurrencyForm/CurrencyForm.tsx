import React from 'react';
import styles from './currencyform.css';
import { useSelector } from "react-redux";
import { IInitialState } from "../../../../../../store/reducer";
import { CurrencyLeftDropdown } from "./CurrencyLeftDropdown";
import { CurrencyRightDropdown } from "./CurrencyRightDropdown";

export function CurrencyForm() {
  const currencyLeftType = useSelector<IInitialState, string>(state => state.currencyFromType.currencyFromType);
  const currencyRightType = useSelector<IInitialState, string>(state => state.currencyToType.currencyToType);

  const NOOP = () => {};

  return (
    <form className={styles.form} method="post" action={`/currency-buy`} encType="application/x-www-form-urlencoded" >
      <div className={styles.inputsContainer}>
        <input style={{ display: 'none' }} type="text" name="from" value={currencyLeftType} onChange={NOOP} />
        <input style={{ display: 'none' }} type="text" name="to" value={currencyRightType} onChange={NOOP} />
        <div className={styles.inputsContainerTop}>
          <label className={styles.labelTop} onClick={(e) => e.preventDefault()}>
            <span className={styles.desc}>Из</span>
            <CurrencyLeftDropdown />
          </label>
          <label className={styles.labelTop} onClick={(e) => e.preventDefault()}>
            <span className={styles.desc}>в</span>
            <CurrencyRightDropdown />
          </label>
        </div>
        <div className={styles.inputsContainerBottom}>
          <label className={styles.labelBottom}>
            <span className={styles.desc}>Сумма</span>
            <input className={`${styles.input} amountInput`} type="text" name="amount" placeholder="Placeholder" />
          </label>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={`${styles.button} formButton`}>
          <span className={styles.buttonDesc}>Обменять</span>
        </button>
      </div>
    </form>
  );
}

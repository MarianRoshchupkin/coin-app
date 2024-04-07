import React from 'react';
import styles from './accountloadbutton.css';
import { useDispatch } from "react-redux";
import { setTransactionsLoadCounter } from "../../../../../store/transactionsLoadCounter/transactionsLoadCounterActions";

export function AccountLoadButton() {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => dispatch(setTransactionsLoadCounter(0))}
      >
        <span className={styles.desc}>Загрузить еще</span>
      </button>
    </div>
  );
}

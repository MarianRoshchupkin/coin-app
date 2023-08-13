import React from 'react';
import styles from './loader.css';

export function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  );
}

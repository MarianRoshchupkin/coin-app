import React from 'react';
import styles from './notfound.css';

export function NotFound() {
  return (
    <div className={styles.container}>
      <p className={styles.error}>404</p>
      <p className={styles.desc}>Страница не найдена</p>
      <a className={styles.link} href={'/'}>
        <span className={styles.text}>Вернуться на главную</span>
      </a>
    </div>
  );
}

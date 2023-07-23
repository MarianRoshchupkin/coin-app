import React from 'react';
import styles from './signupform.css';

export function SignupForm() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Регистрация</h2>
      <form className={styles.form} method="post" action="/signup" encType="application/x-www-form-urlencoded">
        <label className={styles.label}>
          <span className={styles.desc}>Логин</span>
          <input className={styles.input} type="text" name="username" placeholder="Placeholder" />
        </label>
        <label className={styles.label}>
          <span className={styles.desc}>Пароль</span>
          <input className={styles.input} type="password" name="password" placeholder="Placeholder" />
        </label>
        <button className={styles.button}>Зарагестрироваться</button>
      </form>
    </div>
  );
}

import React from 'react';
import styles from './loginform.css';

export function LoginForm() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Вход в аккаунт</h2>
        <form className={styles.form} method="post" action="/login" encType="application/x-www-form-urlencoded">
          <label className={styles.label}>
            <span className={styles.desc}>Логин</span>
            <input className={styles.input} type="text" name="username" placeholder="Placeholder" />
          </label>
          <label className={styles.label}>
            <span className={styles.desc}>Пароль</span>
            <input className={styles.input} type="password" name="password" placeholder="Placeholder" />
          </label>
          <button className={styles.button}>Войти</button>
        </form>
      </div>
      <a className={styles.link} href='/signup'>Зарегестрироваться</a>
    </div>
  );
}

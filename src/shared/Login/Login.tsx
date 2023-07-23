import React from 'react';
import styles from './login.css';
import { LoginHeader } from "./LoginHeader";
import { LoginForm } from "./LoginForm";

interface IUserProps {
  loginError?: string;
}

interface ILoginProps {
  user: IUserProps
}

export function Login({ user }: ILoginProps) {
  return (
    <div className={styles.container}>
      {user.loginError && (
        <div className='notification error'>
          <span className='desc errorText'>
            {user.loginError}
          </span>
        </div>
      )}

      <LoginHeader />
      <LoginForm />

      <a className={styles.link} href='/signup'>Зарегестрироваться</a>
    </div>
  );
}

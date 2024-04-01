import React from 'react';
import styles from './login.css';
import { Notification } from "../Notification";
import { Header } from "../Header";
import { LoginForm } from "./LoginForm";

interface IUserProps {
  error?: string;
  loginError?: string;
}

interface ILoginProps {
  user: IUserProps
}

export function Login({ user }: ILoginProps) {
  return (
    <div className={styles.content}>
      <Header navigation={false} />
      <div className={styles.container}>
        {user.loginError && <Notification type={'error'} text={user.loginError} />}
        <LoginForm />
      </div>
    </div>
  );
}

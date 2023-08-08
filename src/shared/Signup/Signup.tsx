import React from 'react';
import styles from './signup.css';
import { Notification } from "../Notification";
import { Header } from "../Header";
import { SignupForm } from "./SignupForm";
import { SignupButton } from "./SignupButton";

interface IUserProps {
  signupError?: string;
  signupSuccess?: string;
}

interface ISignupProps {
  user: IUserProps
}

export function Signup({ user }: ISignupProps) {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        {user.signupError && (
          <Notification type={'error'} text={user.signupError} />
        )}
        {user.signupSuccess && (
          <Notification type={'success'} text={user.signupSuccess} />
        )}

        <Header navigation={false} />
        <SignupButton />
        <SignupForm />
      </div>
    </div>
  );
}

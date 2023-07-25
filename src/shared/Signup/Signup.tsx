import React from 'react';
import styles from './signup.css';
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
    <div className={styles.container}>
      {user.signupError && (
        <div className='notification error'>
          <span className='desc errorText'>
            {user.signupError}
          </span>
        </div>
      )}
      {user.signupSuccess && (
        <div className='notification success'>
          <span className='desc successText'>
            {user.signupSuccess}
          </span>
        </div>
      )}

      <Header navigation={false} />
      <SignupButton />
      <SignupForm />
    </div>
  );
}

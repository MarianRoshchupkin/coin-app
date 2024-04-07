import React from 'react';
import styles from './content.css';
import { Notification } from "../Notification";

interface IUserProps {
  transferError?: string;
  currencyError?: string;
}

interface IContentProps {
  user?: IUserProps;
  children?: React.ReactNode;
}

export function Content({ user, children }: IContentProps) {
  return (
    <main className={styles.content}>
      {user.transferError && (
        <Notification type={'error'} text={user.transferError} />
      )}
      {user.currencyError && (
        <Notification type={'error'} text={user.currencyError} />
      )}

      { children }
    </main>
  );
}

import React from 'react';
import styles from './content.css';
import {Notification} from "../Notification";

interface IUserProps {
  transferError?: string;
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

      { children }
    </main>
  );
}

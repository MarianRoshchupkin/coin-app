import React, { useState } from 'react';
import styles from './notification.css';
import { ErrorIcon } from "../Icons/ErrorIcon";
import { CheckCircleIcon } from "../Icons/CheckCircleIcon";

interface INotificationProps {
  type: string;
  text: string;
}

export function Notification({ type, text }: INotificationProps) {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <div className={styles.container}>
      {isOpened && (
        <div className={`${styles.notification} ${type === 'error' ? styles.error : styles.success}`}>
          <span className={styles.icon}>
            {type === 'error'
              ? (<ErrorIcon size={28} />)
              : (<CheckCircleIcon size={28} />)
            }
          </span>
          <span className={styles.desc}>
            { text }
          </span>
          <span className={styles.close} onClick={() => setIsOpened(false)}>
            {type === 'error'
              ? (
                  <svg className={styles.closeIcon} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                    <path
                      fill="#9CA3AF"
                      d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                    />
                  </svg>
                )
              : (
                  <svg className={styles.closeIcon} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                    <path
                      fill="#9CA3AF"
                      d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                    />
                  </svg>
                )
            }
          </span>
        </div>
      )}
    </div>
  );
}

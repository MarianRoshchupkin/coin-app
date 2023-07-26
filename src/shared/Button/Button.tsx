import React from 'react';
import styles from './button.css';

interface IButtonProps {
  link: string;
  text: string;
}

export function Button({ link, text }: IButtonProps) {
  return (
    <a className={styles.link} href={`/${link}`}>
      <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.83 11L11.41 7.41L10 6L4 12L10 18L11.41 16.59L7.83 13H20V11H7.83Z" fill="white"/>
      </svg>
      <span className={styles.desc}>{ text }</span>
    </a>
  );
}

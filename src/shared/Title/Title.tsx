import React from 'react';
import styles from './title.css';

interface ITitleProps {
  title: string;
}

export function Title({ title }: ITitleProps) {
  return (
    <h2 className={styles.title}>{ title }</h2>
  );
}

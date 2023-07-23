import React from 'react';
import styles from './description.css';

interface IDescriptionProps {
  text: string;
}

export function Description({ text }: IDescriptionProps) {
  return (
    <p className={styles.desc}>{ text }</p>
  );
}

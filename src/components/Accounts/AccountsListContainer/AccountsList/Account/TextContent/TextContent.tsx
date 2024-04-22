import React from 'react';
import styles from './textcontent.css';
import { RubleIcon } from "../../../../../Icons/RubleIcon";

interface ITextContentProps {
  number: number;
  balance: number;
}

export function TextContent({ number, balance }: ITextContentProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{number}</h3>
      <p className={styles.balance}>
        {balance ? balance : 0}
        <RubleIcon size={12} />
      </p>
    </div>
  );
}

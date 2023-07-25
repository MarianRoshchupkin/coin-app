import React from 'react';
import styles from './banks.css';
import { BanksMenu } from "./BanksMenu";
import { BanksContent } from "./BanksContent";

export function Banks() {
  return (
    <div className={styles.container}>
      <BanksMenu />
      <BanksContent />
    </div>
  );
}

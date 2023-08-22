import React from 'react';
import styles from './banks.css';
import { useBanksData } from "../../hooks/useBanksData";
import { BanksMenu } from "./BanksMenu";
import { BanksContent } from "./BanksContent";

export function Banks() {
  const banks = useBanksData();

  return (
    <div className={styles.container}>
      <BanksMenu />
      <BanksContent banks={banks} />
    </div>
  );
}

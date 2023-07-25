import React from 'react';
import styles from './accountbalance.css';
import { convertDataForSmallGraphics } from "../../../../utils/conversion/convertDataForSmallGraphics";
import { Description } from "../../../Description";
import { AccountGraphics } from "./AccountGraphics";

interface IAccountBalanceProps {
  number: number;
}

export function AccountBalance({ number }: IAccountBalanceProps) {
  const data = convertDataForSmallGraphics(number);

  return (
    <a className={styles.container} href={`/accounts/${number}/details`} >
      <Description text={'Динамика баланса'} />
      <AccountGraphics data={data} />
    </a>
  );
}

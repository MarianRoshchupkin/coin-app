import React from 'react';
import styles from './accountbalance.css';
import { convertDataForBigGraphics } from "../../../../utils/conversion/convertDataForBigGraphics";
import { Description } from "../../../Description";
import { AccountGraphics } from "../../../AccountView/AccountContent/AccountBalance/AccountGraphics";

interface IAccountBalanceProps {
  number: number;
}

export function AccountBalance({ number }: IAccountBalanceProps) {
  const data = convertDataForBigGraphics(number);

  return (
    <div className={styles.container}>
      <Description text={'Динамика баланса'} />
      <AccountGraphics data={data} />
    </div>
  );
}

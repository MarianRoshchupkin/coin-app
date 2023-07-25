import React from 'react';
import styles from './accounttransactions.css';
import { convertDataForBigGraphics } from "../../../../utils/conversion/convertDataForBigGraphics";
import { Description } from "../../../Description";
import { AccountGraphics } from "../../../AccountView/AccountContent/AccountBalance/AccountGraphics";

interface IAccountTransactionsProps {
  number: number;
}

export function AccountTransactions({ number }: IAccountTransactionsProps) {
  const data = convertDataForBigGraphics(number);

  return (
    <div className={styles.container}>
      <Description text={'Соотношение входящих исходящих транзакций'} />
      <AccountGraphics data={data} />
    </div>
  );
}

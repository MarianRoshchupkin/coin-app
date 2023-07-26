import React from 'react';
import styles from './transaction.css';
import { ITransaction } from "../../../../../../hooks/useTransactionsData";
import { convertMillisecondsToDate } from "../../../../../../utils/conversion/convertMillisecondsToDate";

interface ITransactionProps {
  number: number;
  transaction: ITransaction;
}

export function Transaction({ number, transaction }: ITransactionProps) {
  return (
    <div className={styles.container}>
      {transaction && (
        <div className={styles.details}>
          <span className={styles.transaction}>Последняя транзакция:</span>
          <span className={styles.date}>
            { convertMillisecondsToDate(transaction.date) }
          </span>
        </div>
      )}
      <a className={styles.link} href={`/accounts/${number}`}>
        <span className={styles.desc}>Открыть</span>
      </a>
    </div>
  );
}

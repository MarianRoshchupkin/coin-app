import React from 'react';
import styles from './accounttable.css';
import { ITransaction } from "../../../../../hooks/useTransactionsData";
import { MinusIcon } from "../../../../Icons/MinusIcon";
import { RubleRedIcon } from "../../../../Icons/RubleRedIcon";
import { PlusGreenIcon } from "../../../../Icons/PlusGreenIcon";
import { RubleGreenIcon } from "../../../../Icons/RubleGreenIcon";

interface IAccountTable {
  transactions: ITransaction[];
  number: number;
}

export function AccountTable({ transactions, number }: IAccountTable) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.titlesRow}>
          <th className={`${styles.title} ${styles.titleOne}`}>Счет отправителя</th>
          <th className={`${styles.title} ${styles.titleTwo}`}>Счет получателя</th>
          <th className={`${styles.title} ${styles.titleThree}`}>Сумма</th>
          <th className={`${styles.title} ${styles.titleFour}`}>Дата</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr className={styles.contentRows} key={transaction.date}>
            <td className={`${styles.content} ${styles.contentOne}`}>
              { transaction.from }
            </td>
            <td className={`${styles.content} ${styles.contentTwo}`}>
              { transaction.to }
            </td>
            {number === transaction.from
              ? (
                <td className={`${styles.content} ${styles.contentThree}`}>
                  <MinusIcon size={10} />
                  <span className={styles.negativeAmount}>{ transaction.sum }</span>
                  <RubleRedIcon size={16} />
                </td>
              )
              : (
                <td className={`${styles.content} ${styles.contentThree}`}>
                  <PlusGreenIcon size={10} />
                  <span className={styles.positiveAmount}>{ transaction.sum }</span>
                  <RubleGreenIcon size={16} />
                </td>
              )
            }
            <td className={`${styles.content} ${styles.contentFour}`}>
              { (new Date(transaction.date)).toLocaleDateString() }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

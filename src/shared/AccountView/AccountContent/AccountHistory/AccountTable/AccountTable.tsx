import React from 'react';
import styles from './accounttable.css';
import { ITransaction } from "../../../../../hooks/useTransactionsData";
import { EIcons, Icon } from "../../../../Icons/Icon";

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
                  <Icon name={EIcons.minus} size={10} />
                  <span className={styles.negativeAmount}>{ transaction.sum }</span>
                  <Icon name={EIcons.outlinedRedRuble} size={16} />
                </td>
              )
              : (
                <td className={`${styles.content} ${styles.contentThree}`}>
                  <Icon name={EIcons.outlinedGreenPlus} size={10} />
                  <span className={styles.positiveAmount}>{ transaction.sum }</span>
                  <Icon name={EIcons.outlinedGreenRuble} size={16} />
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

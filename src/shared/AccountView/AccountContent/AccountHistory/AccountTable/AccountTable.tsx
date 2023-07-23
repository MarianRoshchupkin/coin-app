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
          <th className={styles.title}>Счет отправителя</th>
          <th className={styles.title}>Счет получателя</th>
          <th className={styles.title}>Сумма</th>
          <th className={styles.title}>Дата</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr className={styles.contentRows} key={transaction.date}>
            <td className={styles.content}>
              { transaction.from }
            </td>
            <td className={styles.content}>
              { transaction.to }
            </td>
            {number === transaction.from
              ? (
                <td className={styles.content}>
                  <Icon name={EIcons.minus} size={10} />
                  <span className={styles.negativeAmount}>{ transaction.sum }</span>
                  <Icon name={EIcons.outlinedRedRuble} size={16} />
                </td>
              )
              : (
                <td className={styles.content}>
                  <Icon name={EIcons.outlinedGreenPlus} size={10} />
                  <span className={styles.positiveAmount}>{ transaction.sum }</span>
                  <Icon name={EIcons.outlinedGreenRuble} size={16} />
                </td>
              )
            }
            <td className={styles.content}>
              { (new Date(transaction.date)).toLocaleDateString() }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

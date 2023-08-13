import React from 'react';
import styles from './accountview.css';
import { AccountMenu } from "./AccountMenu";
import { AccountContent } from "./AccountContent";
import { useParams } from "react-router-dom";
import { filterAccountsByAccount } from "../../utils/filtration/filterAccountsByAccount";
import { limitTransactionsAmount } from "../../utils/limit/limitTransactionsAmount";

export function AccountView() {
  const { number } = useParams();
  const account = filterAccountsByAccount(Number(number));
  const limitedTransactions = limitTransactionsAmount(10, 0, Number(number));

  return (
    <div>
      {account !== undefined && (
        <div className={styles.container}>
          <AccountMenu account={account.number} balance={account.balance} />
          <AccountContent number={Number(number)} transactions={limitedTransactions} />
        </div>
      )}
    </div>
  );
}

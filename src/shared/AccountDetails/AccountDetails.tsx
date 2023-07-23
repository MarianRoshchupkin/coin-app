import React from 'react';
import styles from './accountdetails.css';
import { AccountMenu } from "./AccountMenu";
import { AccountContent } from "./AccountContent";
import { useParams } from "react-router-dom";
import { filterAccountsByAccount } from "../../utils/filtration/filterAccountsByAccount";

export function AccountDetails() {
  const { number } = useParams();
  const account = filterAccountsByAccount(Number(number));

  return (
    <div>
      {account !== undefined && (
        <div className={styles.container}>
          <AccountMenu account={account.number} balance={account.balance} />
          <AccountContent number={Number(number)} />
        </div>
      )}
    </div>
  );
}

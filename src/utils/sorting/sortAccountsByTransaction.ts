import { IAccount } from "../../hooks/useAccountsData";
import { mergeAccountsAndLastTransactions } from "../merger/mergeAccountAndLastTransaction";

export const sortAccountsByTransaction = () => {
  const accountsWithLastTransactions: IAccount[] = mergeAccountsAndLastTransactions();

  accountsWithLastTransactions.sort((accountOne, accountTwo) => {
    if (accountOne.transaction !== undefined && accountTwo.transaction !== undefined) {
      return accountOne.transaction.date - accountTwo.transaction.date
    }
  })

  return accountsWithLastTransactions;
}
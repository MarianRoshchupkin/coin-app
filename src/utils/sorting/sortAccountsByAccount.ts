import { IAccount } from "../../hooks/useAccountsData";
import { mergeAccountsAndLastTransactions } from "../merging/mergeAccountAndLastTransaction";

export const sortAccountsByAccount = () => {
  const accountsWithLastTransactions: IAccount[] = mergeAccountsAndLastTransactions();

  accountsWithLastTransactions.sort((accountOne, accountTwo) => {
    return accountOne.number - accountTwo.number
  })

  return accountsWithLastTransactions;
}

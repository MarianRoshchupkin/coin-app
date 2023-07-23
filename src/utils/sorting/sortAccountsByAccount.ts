import { IAccount } from "../../hooks/useAccountsData";
import { mergeAccountsAndLastTransactions } from "../merger/mergeAccountAndLastTransaction";

export const sortAccountsByAccount = () => {
  const accountsWithLastTransactions: IAccount[] = mergeAccountsAndLastTransactions();

  accountsWithLastTransactions.sort((elementOne, elementTwo) => {
    return elementOne.number - elementTwo.number
  })

  return accountsWithLastTransactions;
}

import { IAccount } from "../../hooks/useAccountsData";
import { mergeAccountsAndLastTransactions } from "../merger/mergeAccountAndLastTransaction";

export const sortAccountsByBalance = () => {
  const accountsWithLastTransactions: IAccount[] = mergeAccountsAndLastTransactions();

  accountsWithLastTransactions.sort((elementOne, elementTwo) => {
    return elementOne.balance - elementTwo.balance
  })

  return accountsWithLastTransactions;
}

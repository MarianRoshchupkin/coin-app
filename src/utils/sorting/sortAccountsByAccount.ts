import { IAccount } from "../../hooks/useAccountsData";
import { mergeAccountsAndLastTransactions } from "../merger/mergeAccountAndLastTransaction";

export const sortAccountsByAccount = () => {
  const accountsWithLastTransactions: IAccount[] = mergeAccountsAndLastTransactions();
  console.log(accountsWithLastTransactions);

  accountsWithLastTransactions.sort((accountOne, accountTwo) => {
    return accountOne.number - accountTwo.number
  })

  return accountsWithLastTransactions;
}

import { IAccount } from "../../hooks/useAccountsData";
import { mergeAccountsAndLastTransactions } from "../merger/mergeAccountAndLastTransaction";

export const sortAccountsByBalance = () => {
  const accountsWithLastTransactions: IAccount[] = mergeAccountsAndLastTransactions();

  accountsWithLastTransactions.sort((accountOne, accountTwo) => {
    return accountOne.balance - accountTwo.balance
  })

  return accountsWithLastTransactions;
}

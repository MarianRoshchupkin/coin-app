import { useAccountsData } from "../../hooks/useAccountsData";
import { useTransactionsData } from "../../hooks/useTransactionsData";

export const mergeAccountsAndLastTransactions = () => {
  const accounts = useAccountsData();
  const transactions = useTransactionsData();
  const accountsWithLastTransactions = [];

  for (let i = 0; i < accounts.length; i++) {
    const filteredTransactions = transactions
      .filter((transaction) =>
        transaction.userId === accounts[i].userId
      );
    const filteredTransactionsByAccount = filteredTransactions
      .filter((transaction) =>
        transaction.from === accounts[i].number
      )
    const lastTransaction = filteredTransactionsByAccount[filteredTransactionsByAccount.length - 1];
    const account = accounts[i];

    account.transaction = lastTransaction
    accountsWithLastTransactions.push(account)
  }

  return accountsWithLastTransactions;
}

import { filterTransactionsByAccount } from "../filtration/filterTransactionsByAccount";

export const limitTransactionsAmount = (limit: number, offset: number, accountNumber: number) => {
  const transactions = filterTransactionsByAccount(accountNumber);
  let limitedTransactions;

  if (transactions.length < limit + offset) {
    limitedTransactions = transactions.reverse();
  } else {
    limitedTransactions = transactions
      .slice(transactions.length - limit - offset, transactions.length)
      .reverse();
  }

  return limitedTransactions;
}

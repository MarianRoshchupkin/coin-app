import { filterTransactionsByAccount } from "../filtration/filterTransactionsByAccount";

export const limitTransactionsAmount = (limit: number, accountNumber: number) => {
  const transactions = filterTransactionsByAccount(accountNumber);
  console.log(transactions);
  let limitedTransactions;

  if (transactions.length < limit) {
    limitedTransactions = transactions.reverse();
  } else {
    limitedTransactions = transactions.slice(transactions.length - limit, transactions.length).reverse();
  }

  return limitedTransactions;
}

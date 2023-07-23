import { useTransactionsData } from "../../hooks/useTransactionsData";

export const filterTransactionsByAccount = (accountNumber: number) => {
  const transactions = useTransactionsData();

  const filteredTransactions = transactions
    .filter((transaction) =>
      transaction.from === accountNumber || transaction.to === accountNumber
    );

  return filteredTransactions.reverse();
}

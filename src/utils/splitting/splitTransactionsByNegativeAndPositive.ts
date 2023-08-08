export const splitTransactionsByNegativeAndPositive = (transactions, number) => {
  const negativeTransactions = transactions.filter((transaction) => transaction.from === number);
  const positiveTransactions = transactions.filter((transaction) => transaction.to === number);

  return {
    negativeTransactions,
    positiveTransactions
  }
}

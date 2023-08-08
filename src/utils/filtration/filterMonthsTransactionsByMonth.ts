export const filterMonthsTransactionsByMonth = (months, sortedMonthsTransactions, transactionValue) => {
  const monthsTransactionsArray = [];

  for (const month of months) {
    const arrayMonthTransactions = sortedMonthsTransactions.filter((monthTransaction) =>
      monthTransaction.month === month
    );

    if (transactionValue === 'negative') {
      if (arrayMonthTransactions.length !== 0) {
        monthsTransactionsArray.push(arrayMonthTransactions);
      } else {
        monthsTransactionsArray.push([{ time: 0, month: month, from: 0, sum: 0 }]);
      }
    } else {
      if (arrayMonthTransactions.length !== 0) {
        monthsTransactionsArray.push(arrayMonthTransactions);
      } else {
        monthsTransactionsArray.push([{ time: 0, month: month, to: 0, sum: 0 }]);
      }
    }
  }

  return monthsTransactionsArray;
}

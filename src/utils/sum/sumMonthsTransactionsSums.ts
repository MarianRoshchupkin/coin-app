export const sumMonthsTransactionsSums = (months, groupedMonthTransactions) => {
  const monthsTransactionsSums = [];

  for (const month of months) {
    let sum = 0;

    for (const monthTransactionArray of groupedMonthTransactions) {
      for (const monthTransaction of monthTransactionArray) {
        if (monthTransaction.month === month) {
          sum += monthTransaction.sum;
        }
      }
    }

    monthsTransactionsSums.push(sum);
  }

  return monthsTransactionsSums;
}

export const sortMonthsTransactionsByMonth = (months, monthsTransactions) => {
  for (const month of months) {
    monthsTransactions.sort((monthTransactionOne, monthTransactionTwo) => {
      if (monthTransactionOne.month === month && monthTransactionTwo.month === month) {
        return monthTransactionTwo.time - monthTransactionOne.time;
      }
    })
  }

  return monthsTransactions
}

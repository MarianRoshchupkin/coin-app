export const sortMonthsBalancesByMonth = (months, monthsBalances) => {
  for (const month of months) {
    monthsBalances.sort((monthBalanceOne, monthBalanceTwo) => {
      if (monthBalanceOne.month === month && monthBalanceTwo.month === month) {
        return monthBalanceTwo.time - monthBalanceOne.time;
      }
    })
  }

  return monthsBalances
}

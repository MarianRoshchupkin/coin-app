export const filterMonthsBalanceByMonth = (months, sortedMonthsBalances) => {
  const monthsBalancesArray = [];

  for (const month of months) {
    const arrayMonthsBalances = sortedMonthsBalances.filter((monthBalance) =>
      monthBalance.month === month
    );

    monthsBalancesArray.push(arrayMonthsBalances.length !== 0
      ? arrayMonthsBalances
      : [{ time: 0, month: month, balance: 0 }]
    );
  }

  return monthsBalancesArray;
}

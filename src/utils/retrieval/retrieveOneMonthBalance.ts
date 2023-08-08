export const retrieveOneMonthBalance = (months, groupedMonthsBalances) => {
  for (const month of months) {
    for (const monthBalanceArray of groupedMonthsBalances) {
      for (const monthBalance of monthBalanceArray) {
        if (monthBalance.month === month) {
          monthBalanceArray.splice(1);
        }
      }
    }
  }

  return groupedMonthsBalances;
}

export const fillBalancesByMonth = (months, groupedMonthBalances) => {
  const balances = [];

  for (const month of months) {
    for (const monthBalanceArray of groupedMonthBalances) {
      for (const monthBalance of monthBalanceArray) {
        if (monthBalance.month === month) {
          balances.push(monthBalance.balance);
        }
      }
    }
  }

  return balances;
}

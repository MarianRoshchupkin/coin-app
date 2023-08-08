export const filterAccountsBalanceByMonth = (months, monthsNumbers, accountsBalances) => {
  const monthsBalances = [];

  for (const accountBalance of accountsBalances) {
    const date = (new Date(accountBalance.date)).toLocaleDateString();
    const month = date.split('.')[1];

    for (let i = 0; i < months.length; i++) {
      if (month === monthsNumbers[i]) {
        monthsBalances.push({
          time: accountBalance.date,
          month: months[i],
          balance: accountBalance.balance
        })
      }
    }
  }

  return monthsBalances;
}

export const filterTransactionsByMonth = (months, monthsNumbers, transactions, transactionValue) => {
  const monthsTransactions = [];

  for (const transaction of transactions) {
    const date = (new Date(transaction.date)).toLocaleDateString();
    const month = date.split('.')[1];

    for (let i = 0; i < months.length; i++) {
      if (month === monthsNumbers[i]) {
        if (transactionValue === 'negative') {
          monthsTransactions.push({
            time: transaction.date,
            month: months[i],
            from: transaction.from,
            sum: transaction.sum
          });
        } else {
          monthsTransactions.push({
            time: transaction.date,
            month: months[i],
            from: transaction.from,
            sum: transaction.sum
          });
        }
      }
    }
  }

  return monthsTransactions;
}
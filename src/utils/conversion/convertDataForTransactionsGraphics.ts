import { sortTransactionsByMonth } from "../sorting/sortTransactionsByMonth";

export const convertDataForTransactionsGraphics = (accountNumber: number, months: string[], monthsNumbers: string[]) => {
  const {
    negativeMonthsTransactionsSums,
    positiveMonthsTransactionsSums
  } = sortTransactionsByMonth(accountNumber, months, monthsNumbers);

  const data: any = {
    labels: months,
    datasets: [
      {
        data: negativeMonthsTransactionsSums,
        backgroundColor: '#FD4E5D',
        hoverBackgroundColor: '#FD4E5D',
        categoryPercentage: 0.8,
      },
      {
        data: positiveMonthsTransactionsSums,
        backgroundColor: '#76CA66',
        hoverBackgroundColor: '#76CA66',
        categoryPercentage: 0.8,
      }
    ]
  }

  data.labels.unshift('');
  data.labels.push('');
  data.datasets[0].data.unshift(null);
  data.datasets[0].data.push(null);
  data.datasets[1].data.unshift(null);
  data.datasets[1].data.push(null);

  return data;
}

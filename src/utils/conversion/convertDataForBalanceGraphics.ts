import { sortAccountsBalancesByMonth } from "../sorting/sortAccountsBalancesByMonth";

export const convertDataForBalanceGraphics = (accountNumber: number, months: string[], monthsNumbers: string[]) => {
  const monthsBalances = sortAccountsBalancesByMonth(accountNumber, months, monthsNumbers);

  const data: any = {
    labels: months,
    datasets: [{
      data: monthsBalances,
      backgroundColor: '#116ACC',
      hoverBackgroundColor: '#116ACC',
      categoryPercentage: 0.8,
      yAxisID: 'y'
    }]
  }

  data.labels.unshift('');
  data.labels.push('');
  data.datasets[0].data.unshift(null);
  data.datasets[0].data.push(null);

  return data;
}

import { filterAccountsByAccount } from "../filtration/filterAccountsByAccount";
import { faker } from '@faker-js/faker';

export const convertDataForSmallGraphics = (accountNumber: number) => {
  const accounts = filterAccountsByAccount(accountNumber);
  const labels = ['мар', 'апр', 'май', 'июн', 'июл', 'авг'];

  const data: any = {
    labels: labels,
    datasets: [{
      data: labels.map(() => faker.number.int({ min: 0, max: 3000 })),
      backgroundColor: '#116ACC',
      hoverBackgroundColor: '#116ACC',
      categoryPercentage: 0.8,
    }]
  }

  data.labels.unshift('');
  data.labels.push('');
  data.datasets[0].data.unshift(null);
  data.datasets[0].data.push(null);

  return data;
}

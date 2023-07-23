import { postMessage } from '../server/apiMethods';

interface ICurrenciesExchangeRate {
  id: string;
  from: string;
  to: string;
  rate: number;
  change: number;
}

export function useCurrenciesExchangeRateData() {
  const wsProto = location.protocol === 'https:' ? 'wss:' : 'ws:'
  const client = new WebSocket(`${wsProto}//${location.host}`);
  let currenciesExchangeRate: ICurrenciesExchangeRate[];

  client.addEventListener('message', (message) => {
    const data = postMessage(message);

    if (data.type === 'EXCHANGE_RATE_CHANGE') {
      currenciesExchangeRate = data.currenciesExchangeRate;
    }
  })

  return currenciesExchangeRate;
}

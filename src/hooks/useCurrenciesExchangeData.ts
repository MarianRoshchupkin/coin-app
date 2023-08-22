import {useEffect, useState} from "react";

export interface ICurrenciesExchange {
  id: string;
  from: string;
  to: string;
  rate: number;
  change: number;
}

export function useCurrenciesExchangeData() {
  const wsProto = location.protocol === 'https:' ? 'wss:' : 'ws:';
  const client = new WebSocket(`${wsProto}//${location.host}`);
  const [currenciesExchange, setCurrenciesExchange] = useState<ICurrenciesExchange[]>(null);

  const handleMessage = (message) => {
    const data = JSON.parse(message.data.toString());

    if (data.type === 'EXCHANGE_RATE_CHANGE') {
      setCurrenciesExchange(data.currenciesExchange);
    }
  }

  useEffect(() => {
    client.addEventListener('message', handleMessage);

    return () => {
      client.removeEventListener('message', handleMessage);
    }
  }, [currenciesExchange])

  return currenciesExchange;
}

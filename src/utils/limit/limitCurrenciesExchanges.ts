import { useCurrenciesExchangeData } from "../../hooks/useCurrenciesExchangeData";
import { useCurrenciesData } from "../../hooks/useCurrenciesData";

export const limitCurrenciesExchange = () => {
  const currenciesExchange = useCurrenciesExchangeData();
  const currencies = useCurrenciesData();
  const CURRENCIES_MIN_LENGTH = 6;
  let limitedCurrenciesExchange = [];

  if (currenciesExchange !== null) {
    const randomNumber = Math.floor(Math.random() * 91);

    limitedCurrenciesExchange = currenciesExchange
      .slice(randomNumber, randomNumber + CURRENCIES_MIN_LENGTH + currencies.length)
  }

  return limitedCurrenciesExchange
}

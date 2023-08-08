import { useAccountsBalanceData } from "../../hooks/useAccountsBalanceData";
import { filterAccountsBalanceByMonth } from "../filtration/filterAccountsBalanceByMonth";
import { sortMonthsBalancesByMonth } from "./sortMonthsBalancesByMonth";
import { filterMonthsBalanceByMonth } from "../filtration/filterMonthsBalanceByMonth";
import { retrieveOneMonthBalance } from "../retrieval/retrieveOneMonthBalance";
import { fillBalancesByMonth } from "../filling/fillBalancesByMonth";

export const sortAccountsBalancesByMonth = (number: number, months: string[], monthsNumbers: string[]) => {
  const accountsBalances = useAccountsBalanceData(number);
  const monthsBalances = filterAccountsBalanceByMonth(months, monthsNumbers, accountsBalances);
  const sortedMonthsBalances = sortMonthsBalancesByMonth(months, monthsBalances);
  const groupedMonthsBalances = filterMonthsBalanceByMonth(months, sortedMonthsBalances);
  const groupedMonthsBalancesWithOneValue = retrieveOneMonthBalance(months, groupedMonthsBalances);
  const balances = fillBalancesByMonth(months, groupedMonthsBalancesWithOneValue);

  return balances;
}

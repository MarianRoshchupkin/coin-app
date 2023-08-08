import { filterTransactionsByAccount } from "../filtration/filterTransactionsByAccount";
import { splitTransactionsByNegativeAndPositive } from "../splitting/splitTransactionsByNegativeAndPositive";
import { filterTransactionsByMonth } from "../filtration/filterTransactionsByMonth";
import { sortMonthsTransactionsByMonth } from "./sortMonthsTransactionsByMonth";
import { filterMonthsTransactionsByMonth } from "../filtration/filterMonthsTransactionsByMonth";
import { sumMonthsTransactionsSums } from "../sum/sumMonthsTransactionsSums";

export const sortTransactionsByMonth = (number: number, months: string[], monthsNumbers: string[]) => {
  const transactions = filterTransactionsByAccount(number);
  const { negativeTransactions, positiveTransactions } = splitTransactionsByNegativeAndPositive(transactions, number);
  const negativeMonthsTransactions = filterTransactionsByMonth(months, monthsNumbers, negativeTransactions, 'negative');
  const positiveMonthsTransactions = filterTransactionsByMonth(months, monthsNumbers, positiveTransactions, 'positive');
  const sortedNegativeMonthsTransactions = sortMonthsTransactionsByMonth(months, negativeMonthsTransactions);
  const sortedPositiveMonthsTransactions = sortMonthsTransactionsByMonth(months, positiveMonthsTransactions);
  const groupedNegativeMonthsTransactions = filterMonthsTransactionsByMonth(months, sortedNegativeMonthsTransactions, 'negative');
  const groupedPositiveMonthsTransactions = filterMonthsTransactionsByMonth(months, sortedPositiveMonthsTransactions, 'positive');
  const negativeMonthsTransactionsSums = sumMonthsTransactionsSums(months, groupedNegativeMonthsTransactions);
  const positiveMonthsTransactionsSums = sumMonthsTransactionsSums(months, groupedPositiveMonthsTransactions);

  return {
    negativeMonthsTransactionsSums,
    positiveMonthsTransactionsSums
  }
}
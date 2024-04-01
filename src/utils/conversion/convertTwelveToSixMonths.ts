export const convertTwelveToSixMonths = () => {
  const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  const monthsNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const date = (new Date(Date.now())).toLocaleDateString();
  const month = date.split('.')[1];

  const monthsNumberIndex = monthsNumbers.findIndex((monthNumber) => monthNumber === month);
  const monthsBefore = monthsNumberIndex < 5 ? monthsNumberIndex : 5;
  const monthsAfter = monthsNumberIndex === 12 ? 0 : 1;
  const halfYearMonths = months.slice(monthsNumberIndex - monthsBefore, monthsNumberIndex + monthsAfter);
  const halfYearMonthsNumber = monthsNumbers.slice(monthsNumberIndex - monthsBefore, monthsNumberIndex + monthsAfter);

  return { halfYearMonths, halfYearMonthsNumber };
}
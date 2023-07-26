export const convertMillisecondsToDate = (milliseconds: number) => {
  const convertedDate = (new Date(milliseconds)).toLocaleDateString();
  const day = convertedDate.split('.')[0];
  const month = convertedDate.split('.')[1];
  const year = convertedDate.split('.')[2];

  switch (month) {
    case '01':
      return `${day} января ${year}`;
    case '02':
      return `${day} февраля ${year}`;
    case '03':
      return `${day} марта ${year}`;
    case '04':
      return `${day} апреля ${year}`;
    case '05':
      return `${day} мая ${year}`;
    case '06':
      return `${day} июня ${year}`;
    case '07':
      return `${day} июля ${year}`;
    case '08':
      return `${day} августа ${year}`;
    case '09':
      return `${day} сентября ${year}`;
    case '10':
      return `${day} октября ${year}`;
    case '11':
      return `${day} ноября ${year}`;
    case '12':
      return `${day} декабря ${year}`;
    default:
      return month;
  }
}

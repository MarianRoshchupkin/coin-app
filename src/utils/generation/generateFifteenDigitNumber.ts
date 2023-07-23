export const generateFifteenDigitNumber = () => {
  const max = Math.pow(10,15);
  const min = max / 10;

  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

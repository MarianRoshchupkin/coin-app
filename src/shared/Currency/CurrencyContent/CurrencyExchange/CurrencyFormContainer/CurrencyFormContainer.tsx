import React, {useEffect} from 'react';
import styles from './currencyformcontainer.css';
import { CurrencyForm } from "./CurrencyForm";

export function CurrencyFormContainer() {
  const amountInputRegExp = new RegExp(/^\d*\.*\d*$/);
  let amountEnteredString = '';
  let amountEnteredStringLength = 0;

  const handleAmountInput = (event: MouseEvent) => {
    const formButton: HTMLButtonElement = document.querySelector('.formButton');
    const element: HTMLInputElement = event.target as HTMLInputElement;

    if (element.value.charAt(0) === '.') {
      element.value = element.value.slice(1, element.value.length);
      amountEnteredString = element.value;
    }

    if(element.value.match(/\./g) !== null) {
      const dotNumber = element.value.match(/\./g).length;
      const dotIndex = element.value.indexOf('.');

      if (dotNumber > 1) {
        const firstStringPart = element.value.slice(0, dotIndex);
        const secondStringPart = element.value.slice(dotIndex + 1, element.value.length);

        element.value = firstStringPart + secondStringPart;
        amountEnteredString = element.value;
      }

      const stringAfterDot = element.value.slice(element.value.indexOf('.') + 1, element.value.length);

      if (stringAfterDot.length > 2) {
        element.value = element.value.slice(0, element.value.indexOf('.') + 3);
        amountEnteredString = element.value;
      }
    }

    if (element.value.length > amountEnteredStringLength) {
      if (amountInputRegExp.test(element.value)) {
        amountEnteredString = element.value;
      } else {
        amountEnteredString += '';
      }

      element.value = amountEnteredString;
    }

    if (element.value.length < amountEnteredStringLength) {
      amountEnteredString = amountEnteredString.slice(0, -1);
    }

    if (element.value.charAt(element.value.length - 1) === '.') {
      formButton.setAttribute('disabled', '');
    } else {
      formButton.removeAttribute('disabled');
    }

    amountEnteredStringLength = element.value.length;
  }

  useEffect(() => {
    const amountInput: HTMLInputElement = document.querySelector('.amountInput');
    amountInput.addEventListener('input', handleAmountInput);

    return () => {
      amountInput.removeEventListener('input', handleAmountInput);
    }
  }, []);

  return (
    <CurrencyForm />
  );
}

import React, { useEffect } from 'react';
import styles from './accountformcontainer.css';
import { AccountForm } from "./AccountForm";

interface IAccountFormContainerProps {
  number: number;
}

export function AccountFormContainer({ number }: IAccountFormContainerProps) {
  const numberInputRegExp = new RegExp(/^(\d{1,15})$/);
  const sumInputRegExp = new RegExp(/^\d*\.*\d*$/);
  let numberEnteredString = '';
  let sumEnteredString = '';
  let numberEnteredStringLength = 0;
  let sumEnteredStringLength = 0;

  const handleNumberInput = (event: MouseEvent) => {
    const element: HTMLInputElement = event.target as HTMLInputElement;

    if (element.value.length > numberEnteredStringLength) {
      if (numberInputRegExp.test(element.value)) {
        numberEnteredString = element.value;
      } else {
        numberEnteredString += ''
      }

      element.value = numberEnteredString;
    } else {
      numberEnteredString = numberEnteredString.slice(0, -1);
    }

    numberEnteredStringLength = element.value.length;
  }

  const handleSumInput = (event: MouseEvent) => {
    const formButton: HTMLButtonElement = document.querySelector('.formButton');
    const element: HTMLInputElement = event.target as HTMLInputElement;

    if (element.value.charAt(0) === '.') {
      element.value = element.value.slice(1, element.value.length);
      sumEnteredString = element.value;
    }

    if(element.value.match(/\./g) !== null) {
      const dotNumber = element.value.match(/\./g).length;
      const dotIndex = element.value.indexOf('.');

      if (dotNumber > 1) {
        const firstStringPart = element.value.slice(0, dotIndex);
        const secondStringPart = element.value.slice(dotIndex + 1, element.value.length);

        element.value = firstStringPart + secondStringPart;
        sumEnteredString = element.value;
      }

      const stringAfterDot = element.value.slice(element.value.indexOf('.') + 1, element.value.length);

      if (stringAfterDot.length > 2) {
        element.value = element.value.slice(0, element.value.indexOf('.') + 3);
        sumEnteredString = element.value;
      }
    }

    if (element.value.length > sumEnteredStringLength) {
      if (sumInputRegExp.test(element.value)) {
        sumEnteredString = element.value;
      } else {
        sumEnteredString += '';
      }

      element.value = sumEnteredString;
    }

    if (element.value.length < sumEnteredStringLength) {
      sumEnteredString = sumEnteredString.slice(0, -1);
    }

    if (element.value.charAt(element.value.length - 1) === '.') {
      formButton.setAttribute('disabled', '');
    } else {
      formButton.removeAttribute('disabled');
    }

    sumEnteredStringLength = element.value.length;
  }

  useEffect(() => {
    const numberInput: HTMLInputElement = document.querySelector('.number');
    const sumInput: HTMLInputElement = document.querySelector('.sum');

    numberInput.addEventListener('input', handleNumberInput);
    sumInput.addEventListener('input', handleSumInput);

    return () => {
      numberInput.removeEventListener('input', handleNumberInput);
      sumInput.addEventListener('input', handleSumInput);
    }
  }, []);

  return (
    <AccountForm number={number} />
  );
}

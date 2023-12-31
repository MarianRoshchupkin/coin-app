import React from 'react';
import styles from './accounttextcontent.css';
import { Title } from "../../../Title";
import { Button } from "../../../Button";

interface IAccountTextContentProps {
  number: number;
}

export function AccountTextContent({ number }: IAccountTextContentProps) {
  return (
    <div className={styles.container}>
      <Title title={'История баланса'} />
      <Button link={`/accounts/${number}`} text={'Вернуться назад'} />
    </div>
  );
}

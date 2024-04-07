import React from 'react';
import styles from './accounttextcontent.css';
import { Title } from "../../../Title";
import { Button } from "../../../Button";

export function AccountTextContent() {
  return (
    <div className={styles.container}>
      <Title title={'Просмотр счёта'} />
      <Button link={'/'} text={'Вернуться назад'} />
    </div>
  );
}

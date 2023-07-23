import React from 'react';
import styles from './accounttextcontent.css';
import { Title } from "../../../Title";
import { Button } from "../../../Button";
import { EIcons } from "../../../Icons/Icon";

export function AccountTextContent() {
  return (
    <div className={styles.container}>
      <Title title={'Просмотр счёта'} />
      <Button
        link={''}
        icon={EIcons.outlinedArrowLeft}
        text={'Вернуться назад'}
      />
    </div>
  );
}

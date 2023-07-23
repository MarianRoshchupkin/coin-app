import React from 'react';
import styles from './signupbutton.css';
import { Button } from "../../Button";
import { EIcons } from "../../Icons/Icon"

export function SignupButton() {
  return (
    <div className={styles.container}>
      <Button
        link={''}
        icon={EIcons.outlinedArrowLeft}
        text={'Вернуться назад'}
      />
    </div>
  );
}

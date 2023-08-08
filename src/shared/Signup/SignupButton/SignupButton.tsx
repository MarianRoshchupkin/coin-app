import React from 'react';
import styles from './signupbutton.css';
import { Button } from "../../Button";

export function SignupButton() {
  return (
    <div className={styles.container}>
      <Button link={''} text={'Вернуться назад'} />
    </div>
  );
}

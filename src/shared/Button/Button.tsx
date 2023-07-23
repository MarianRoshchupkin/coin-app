import React from 'react';
import styles from './button.css';
import { EIcons, Icon } from "../Icons/Icon";

interface IButtonProps {
  link: string;
  icon: EIcons;
  text: string;
}

export function Button({ link, icon, text }: IButtonProps) {
  return (
    <a className={styles.link} href={`/${link}`}>
      <Icon name={icon} size={24} />
      <span className={styles.desc}>{ text }</span>
    </a>
  );
}

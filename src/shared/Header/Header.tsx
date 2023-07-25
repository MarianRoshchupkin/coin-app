import React from 'react';
import styles from './header.css';
import { Logo } from "./Logo";
import { NavBlock } from "./NavBlock";

interface IHeaderProps {
  navigation: boolean
}

export function Header({ navigation }: IHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        {navigation && (
          <NavBlock />
        )}
      </div>
    </header>
  );
}

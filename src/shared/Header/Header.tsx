import React from 'react';
import styles from './header.css';
import { Logo } from "./Logo";
import { NavBlock } from "./NavBlock";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <NavBlock />
      </div>
    </header>
  );
}

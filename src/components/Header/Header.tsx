import React, {useEffect} from 'react';
import styles from './header.css';
import {useSelector, useDispatch} from 'react-redux';
import { IInitialState } from '../../store/reducer';
import {setMenuDropdown} from '../../store/menuDropdown/menuDropdownActions';
import {Logo} from "./Logo";
import {NavBlock} from "./NavBlock";

interface IHeaderProps {
  navigation: boolean
}

export function Header({ navigation }: IHeaderProps) {
  const menuDropdownClicked = useSelector<IInitialState, boolean>(state => state.menuDropdownClicked.menuDropdownClicked);
  const dispatch = useDispatch();
  const screenWidthLoaded = window.screen.width;

  if (screenWidthLoaded < 576) {
    dispatch(setMenuDropdown(true));
  } else {
    dispatch(setMenuDropdown(false));
  }

  useEffect(() => {
    function handleResize () {
      const screenWidthResized = window.screen.width;

      if (screenWidthResized < 576) {
        dispatch(setMenuDropdown(true));
      } else {
        dispatch(setMenuDropdown(false));
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        {navigation && <NavBlock />}
      </div>
      {menuDropdownClicked &&
        <div className={styles.menu}>
          <div className={styles.divider}></div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href="/banks">Банкоматы</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/accounts">Счета</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/currency">Валюта</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/logout">Выйти</a>
            </li>
          </ul>
        </div>
      }
    </header>
  );
}

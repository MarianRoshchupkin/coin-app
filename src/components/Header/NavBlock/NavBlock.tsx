import React from 'react';
import styles from './navblock.css';
import {useSelector, useDispatch} from 'react-redux';
import {IInitialState} from '../../../store/reducer';
import { setMenuDropdownClicked } from '../../../store/menuDropdownClicked/menuDropdownClickedActions';

export function NavBlock() {
  const menuDropdown = useSelector<IInitialState, boolean>(state => state.menuDropdown.menuDropdown);
  const menuDropdownClicked = useSelector<IInitialState, boolean>(state => state.menuDropdownClicked.menuDropdownClicked);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setMenuDropdownClicked(!menuDropdownClicked));
  }

  return (
    <ul className={styles.list}>
      {!menuDropdown
        ? <>
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
          </>
        : <button className={styles.burger} onClick={handleClick}>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>
      }
    </ul>
  );
}

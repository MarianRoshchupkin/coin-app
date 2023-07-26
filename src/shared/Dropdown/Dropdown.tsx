import React, { ReactNode, useEffect, useState } from 'react';
import styles from './dropdown.css';
import { useSelector, useDispatch } from "react-redux";
import { IInitialState } from "../../store/reducer";
import { setDropdownSwitcher } from "../../store/dropdownSwitcher/dropdownSwitcherActions";

interface IDropdownProps {
  button: ReactNode;
  children: ReactNode;
}

export function Dropdown({ button, children }: IDropdownProps) {
  const dropdownSwitcher = useSelector<IInitialState, boolean>(state => state.dropdownSwitcher.dropdownSwitcher);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div onClick={() => dispatch(setDropdownSwitcher(!dropdownSwitcher))}>
        { button }
      </div>
      {dropdownSwitcher && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => dispatch(setDropdownSwitcher(false))}>
            { children }
          </div>
        </div>
      )}
    </div>
  );
}

import React, {ReactNode, useEffect, useRef} from 'react';
import styles from './dropdown.css';
import { useDispatch } from "react-redux";

interface IDropdownProps {
  button: ReactNode;
  children: ReactNode;
  dropdownSwitcher: boolean;
  setDropdownSwitcher: (dropdownSwitcher: boolean) => void;
}

export function Dropdown({ button, children, dropdownSwitcher, setDropdownSwitcher }: IDropdownProps) {
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

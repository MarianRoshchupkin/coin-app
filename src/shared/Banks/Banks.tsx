import React from 'react';
import styles from './banks.css';
import { useBanksData } from "../../hooks/useBanksData";
import { BanksMenu } from "./BanksMenu";
import { BanksContent } from "./BanksContent";
import { Loader } from "../Loader";
import { useSelector } from "react-redux";
import { IInitialState } from "../../store/reducer";

export function Banks() {
  const banks = useBanksData();
  const banksLoading = useSelector<IInitialState, boolean>(state => state.banks.loading);

  return (
    <div>
      {banksLoading
        ? (<Loader />)
        : (
            <div className={styles.container}>
              <BanksMenu />
              <BanksContent banks={banks} />
            </div>
          )
      }
    </div>
  );
}

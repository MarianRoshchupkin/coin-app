import React from 'react';
import styles from './accountbalance.css';
import {
  noBalanceGraphicsOptions,
  balanceGraphicsOptions,
  chartAreaBorder,
  bigGraphicsTicksStyles
} from "../../../../utils/settingsForGraphics";
import { convertDataForBalanceGraphics } from "../../../../utils/conversion/convertDataForBalanceGraphics";
import { Description } from "../../../Description";
import { AccountGraphics } from "../../../AccountView/AccountContent/AccountBalance/AccountGraphics";
import { Loader } from "../../../Loader";
import { useSelector } from "react-redux";
import { IInitialState } from "../../../../store/reducer";

interface IAccountBalanceProps {
  number: number;
}

export function AccountBalance({ number }: IAccountBalanceProps) {
  const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  const monthsNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const data = convertDataForBalanceGraphics(number, months, monthsNumbers);
  const accountsBalanceLoading = useSelector<IInitialState, boolean>(state => state.accountsBalance.loading);

  return (
    <div className={styles.container}>
      <Description text={'Динамика баланса'} />
      {accountsBalanceLoading
        ? (<Loader />)
        : data.datasets[0].data.every((value) => value === 0 || value === null)
          ? (
            <AccountGraphics
              data={data}
              options={noBalanceGraphicsOptions}
              plugins={[chartAreaBorder, bigGraphicsTicksStyles]}
            />
          )
          : (
            <AccountGraphics
              data={data}
              options={balanceGraphicsOptions}
              plugins={[chartAreaBorder, bigGraphicsTicksStyles]}
            />
          )
      }
    </div>
  );
}

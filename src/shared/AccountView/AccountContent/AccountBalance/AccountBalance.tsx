import React from 'react';
import styles from './accountbalance.css';
import {
  noBalanceGraphicsOptions,
  balanceGraphicsOptions,
  chartAreaBorder,
  smallGraphicsTicksStyles
} from "../../../../utils/settingsForGraphics";
import { convertTwelveToSixMonths } from "../../../../utils/conversion/convertTwelveToSixMonths";
import { convertDataForBalanceGraphics } from "../../../../utils/conversion/convertDataForBalanceGraphics";
import { Loader } from "../../../Loader";
import { Description } from "../../../Description";
import { AccountGraphics } from "./AccountGraphics";
import { useSelector} from "react-redux";
import { IInitialState } from "../../../../store/reducer";

interface IAccountBalanceProps {
  number: number;
}

export function AccountBalance({ number }: IAccountBalanceProps) {
  const { halfYearMonths, halfYearMonthsNumber } = convertTwelveToSixMonths();
  const data = convertDataForBalanceGraphics(number, halfYearMonths, halfYearMonthsNumber);
  const accountsBalanceLoading = useSelector<IInitialState, boolean>(state => state.accountsBalance.loading);

  return (
    <a className={styles.container} href={`/accounts/${number}/details`} >
      <Description text={'Динамика баланса'} />
      {accountsBalanceLoading
        ? (<Loader />)
        : data.datasets[0].data.every((value) => value === 0 || value === null)
            ? (
              <AccountGraphics
                data={data}
                options={noBalanceGraphicsOptions}
                plugins={[chartAreaBorder, smallGraphicsTicksStyles]}
              />
            )
            : (
              <AccountGraphics
                data={data}
                options={balanceGraphicsOptions}
                plugins={[chartAreaBorder, smallGraphicsTicksStyles]}
              />
            )
      }
    </a>
  );
}

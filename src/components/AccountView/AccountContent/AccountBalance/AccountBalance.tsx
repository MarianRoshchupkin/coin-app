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
import { Description } from "../../../Description";
import { AccountGraphics } from "./AccountGraphics";

interface IAccountBalanceProps {
  number: number;
}

export function AccountBalance({ number }: IAccountBalanceProps) {
  const { halfYearMonths, halfYearMonthsNumber } = convertTwelveToSixMonths();
  const data = convertDataForBalanceGraphics(number, halfYearMonths, halfYearMonthsNumber);

  return (
    <a className={styles.container} href={`/accounts/${number}/details`} >
      <div className={styles.description}>
        <Description text={'Динамика баланса'} />
      </div>
      {data.datasets[0].data.every((value) => value === 0 || value === null)
        ? <AccountGraphics
            data={data}
            options={noBalanceGraphicsOptions}
            plugins={[chartAreaBorder, smallGraphicsTicksStyles]}
          />
        : <AccountGraphics
            data={data}
            options={balanceGraphicsOptions}
            plugins={[chartAreaBorder, smallGraphicsTicksStyles]}
          />
      }
    </a>
  );
}

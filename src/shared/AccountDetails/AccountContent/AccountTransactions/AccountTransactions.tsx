import React from 'react';
import styles from './accounttransactions.css';
import {
  noTransactionsGraphicsOptions,
  transactionsGraphicsOptions,
  chartAreaBorder,
  bigGraphicsTicksStyles
} from "../../../../utils/settingsForGraphics";
import { convertDataForTransactionsGraphics } from "../../../../utils/conversion/convertDataForTransactionsGraphics";
import { Description } from "../../../Description";
import { AccountGraphics } from "../../../AccountView/AccountContent/AccountBalance/AccountGraphics";
import { Loader } from "../../../Loader";
import { useSelector } from "react-redux";
import { IInitialState } from "../../../../store/reducer";

interface IAccountTransactionsProps {
  number: number;
}

export function AccountTransactions({ number }: IAccountTransactionsProps) {
  const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  const monthsNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const data = convertDataForTransactionsGraphics(number, months, monthsNumbers);
  const accountsBalanceLoading = useSelector<IInitialState, boolean>(state => state.accountsBalance.loading);

  return (
    <div className={styles.container}>
      <Description text={'Соотношение входящих исходящих транзакций'} />
      {accountsBalanceLoading
        ? (<Loader />)
        : data.datasets[0].data.every((value) => value === 0 || value === null)
          ? (
            <AccountGraphics
              data={data}
              options={noTransactionsGraphicsOptions}
              plugins={[chartAreaBorder, bigGraphicsTicksStyles]}
            />
          )
          : (
            <AccountGraphics
              data={data}
              options={transactionsGraphicsOptions}
              plugins={[chartAreaBorder, bigGraphicsTicksStyles]}
            />
          )
      }
    </div>
  );
}

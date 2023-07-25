import React from 'react';
import styles from './bankscontent.css';
import { YMaps, Map } from "@pbe/react-yandex-maps";

export function BanksContent() {
  return (
    <div className={styles.container}>
      <YMaps>
        <Map width='100%' height='728px' defaultState={{ center: [55.75, 37.57], zoom: 10 }} />
      </YMaps>
    </div>
  );
}

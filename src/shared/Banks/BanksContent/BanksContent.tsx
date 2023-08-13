import React from 'react';
import styles from './bankscontent.css';
import { IBank } from "../../../hooks/useBanksData";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

interface IBanksContentProps {
  banks: IBank[];
}

export function BanksContent({ banks }: IBanksContentProps) {
  return (
    <div className={styles.container}>
      <YMaps>
        <Map
          width='100%'
          height='728px'
          defaultState={{
            center: [55.75, 37.57],
            zoom: 11,
            controls: ['zoomControl', 'fullscreenControl']
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          {banks.map((bank) => (
            <Placemark defaultGeometry={[bank.lat, bank.lon]} key={bank.id} />
          ))}
        </Map>
      </YMaps>
    </div>
  );
}

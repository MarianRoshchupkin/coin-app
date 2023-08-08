import React from 'react';
import styles from './accountgraphics.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

interface IAccountGraphicsProps {
  data: any;
  options: any;
  plugins: any
}

export function AccountGraphics({ data, options, plugins }: IAccountGraphicsProps) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
  );

  return (
    <div className={styles.container}>
      <Bar data={data} options={options} plugins={plugins} />
    </div>
  );
}

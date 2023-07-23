import React from 'react';
import styles from './accountgraphics.css';
import { convertDataForSmallGraphics } from "../../../../../utils/conversion/convertDataForSmallGraphics";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

interface IAccountGraphicsProps {
  number: number;
}

export function AccountGraphics({ number }: IAccountGraphicsProps) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
  );

  const data = convertDataForSmallGraphics(number);
  const chartAreaBorder = {
    id: 'chartAreaBorder',
    beforeDraw(chart, args, options) {
      const {ctx, chartArea: {top, bottom, left, right, width, height}} = chart;

      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#000000';
      ctx.moveTo(left + 1, top);
      ctx.lineTo(right, top);
      ctx.lineTo(right, bottom);
      ctx.lineTo(left + 1, bottom);
      ctx.closePath();
      ctx.stroke();
    }
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        drawBorder: false,
        offset: false,
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false
        }
      },
      y: {
        position: 'right',
        drawBorder: false,
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          callback: function(val, index, values) {
            return index === 0 || index === values.length - 1 ? this.getLabelForValue(val) : '';
          },
        }
      }
    },
    ticks: {
      font: {
        family: 'Work Sans, sans-serif',
        size: 20,
        weight: '700',
        color: '#000000'
      }
    }
  }

  return (
    <div className={styles.container}>
      <Bar data={data} options={options} plugins={[chartAreaBorder]} />
    </div>
  );
}

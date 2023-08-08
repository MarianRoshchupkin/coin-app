const chartAreaBorder = {
  id: 'chartAreaBorder',
  beforeDraw(chart) {
    const { ctx, chartArea: { top, bottom, left, right } } = chart;

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

const smallGraphicsTicksStyles = {
  id: 'ticksStyles',
  afterDraw: function(chart) {
    const { ctx, scales: { x, y } } = chart;
    const yMinTickValue = y.ticks[0].value;
    const yMaxTickValue = y.ticks[y.ticks.length - 1].value;
    const xPos = y.right;
    const yMinPos = y.getPixelForTick(0);
    const yMaxPos = y.getPixelForTick(y.ticks.length - 1);
    const xOffset = xPos + 20;

    ctx.save();
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    ctx.font = "500 20px 'Work Sans', sans-serif";
    ctx.fillStyle = '#000000';
    ctx.fillText(yMinTickValue, xOffset, yMinPos - 10 );
    ctx.fillText(yMaxTickValue, xOffset, yMaxPos + 10 );
    x.ticks.forEach((tick, index, ticks) => {
      const value = tick.label;
      const xPos = x.getPixelForTick(index);
      const yPos = y.bottom;

      ctx.textBaseline = 'bottom';
      ctx.textAlign = 'center';
      ctx.font = "700 20px 'Work Sans', sans-serif";
      ctx.fillStyle = '#000000';
      ctx.fillText(value, xPos, yPos + 30);
    })
    ctx.restore();
  }
}

const bigGraphicsTicksStyles = {
  id: 'ticksStyles',
  afterDraw: function(chart) {
    const { ctx, scales: { x, y } } = chart;
    const yMinTickValue = `${y.ticks[0].value} ₽`;
    const yMaxTickValue = `${y.ticks[y.ticks.length - 1].value} ₽`;
    const xPos = y.right;
    const yMinPos = y.getPixelForTick(0);
    const yMaxPos = y.getPixelForTick(y.ticks.length - 1);
    const xOffset = xPos + 20;

    ctx.save();
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    ctx.font = "500 20px 'Work Sans', sans-serif";
    ctx.fillStyle = '#000000';
    ctx.fillText(yMinTickValue, xOffset, yMinPos - 10 );
    ctx.fillText(yMaxTickValue, xOffset, yMaxPos + 10 );
    x.ticks.forEach((tick, index, ticks) => {
      const value = tick.label;
      const xPos = x.getPixelForTick(index);
      const yPos = y.bottom;

      ctx.textBaseline = 'bottom';
      ctx.textAlign = 'center';
      ctx.font = "700 20px 'Work Sans', sans-serif";
      ctx.fillStyle = '#000000';
      ctx.fillText(value, xPos, yPos + 30);
    })
    ctx.restore();
  }
}

const noBalanceGraphicsOptions: any = {
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
      },
      ticks: {
        display: false
      }
    },
    y: {
      position: 'right',
      offset: false,
      drawBorder: false,
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false
      },
      ticks: {
        display: false,
      },
      afterFit: function(axis) {
        axis.paddingTop = 2;
        axis.paddingBottom = 35;
        axis.paddingRight = 2;
      },
    },
  }
}

const balanceGraphicsOptions: any = {
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
      },
      ticks: {
        display: false
      }
    },
    y: {
      position: 'right',
      offset: false,
      drawBorder: false,
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false
      },
      ticks: {
        display: false,
      },
      afterFit: function(axis) {
        axis.paddingTop = 2;
        axis.paddingRight = 105;
        axis.paddingBottom = 35;
      },
    },
  }
}

const noTransactionsGraphicsOptions: any = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      drawBorder: false,
      offset: false,
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false
      },
      ticks: {
        display: false
      }
    },
    y: {
      stacked: true,
      position: 'right',
      offset: false,
      drawBorder: false,
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false
      },
      ticks: {
        display: false,
      },
      afterFit: function(axis) {
        axis.paddingTop = 2;
        axis.paddingBottom = 35;
        axis.paddingRight = 2;
      },
    }
  }
}

const transactionsGraphicsOptions: any = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      drawBorder: false,
      offset: false,
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false
      },
      ticks: {
        display: false
      }
    },
    y: {
      stacked: true,
      position: 'right',
      offset: false,
      drawBorder: false,
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false
      },
      ticks: {
        display: false,
      },
      afterFit: function(axis) {
        axis.paddingTop = 2;
        axis.paddingRight = 105;
        axis.paddingBottom = 35;
      },
    }
  }
}

export {
  chartAreaBorder,
  smallGraphicsTicksStyles,
  bigGraphicsTicksStyles,
  noBalanceGraphicsOptions,
  balanceGraphicsOptions,
  noTransactionsGraphicsOptions,
  transactionsGraphicsOptions
}

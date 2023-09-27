import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';

import styles from './Graph.module.scss';

import { ReactComponent as CloseCircle } from '@/assets/svg/close-circle.svg';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ type, graphData }) => {
  const newLabels = graphData.map(item => item.period);
  const newValue = graphData.map(item => item.value);

  const chartRef = useRef(null); //create reference hook
  const [tooltip, setTooltip] = useState({
    opacity: 0,
    top: 0,
    left: 0,
    date: '',
    value: '',
    display: 'none',
  });

  const options = {
    interaction: {
      mode: 'index',
      intersect: false,
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: false,
        position: 'nearest',
        external: context => {
          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            if (tooltip.opacity !== 0) {
              setTooltip(prev => ({ ...prev, opacity: 0, display: 'none' }));
              return;
            }
          }
          const position = context.chart.canvas.getBoundingClientRect();
          const newTooltipData = {
            opacity: 1,
            display: 'block',
            left: position.left + tooltipModel.caretX,
            top: position.top + tooltipModel.caretY - 94,
            date: tooltipModel.dataPoints[0].label,
            value: tooltipModel.dataPoints[0].formattedValue,
          };
          if (!isEqual(tooltip, newTooltipData)) setTooltip(newTooltipData);
        },
      },
    },
    indexAxis: 'x',
    scales: {
      x: {
        alignToPixels: true,
        offset: true,
        ticks: {
          padding: 6,
          backdropPadding: 0,
        },
        beginAtZero: false,
        grid: {
          color: '#292928',
          offset: true,
          tickLength: 0,
        },
        border: {
          color: '#292928',
        },
      },
      y: {
        ticks: {
          alignToPixels: true,
          stepSize: 1000,
          padding: 8,
          backdropPadding: 0,
          callback: function (value) {
            if (value === 0) {
              return 0;
            }
            return `${value / 1000}${type === 'calories' ? 'K' : 'L'}`;
          },
        },
        beginAtZero: true,
        grid: {
          color: '#292928',
          tickLength: 0,
        },
        border: {
          color: '#292928',
        },
      },
    },
  };

  const data = {
    labels: newLabels,
    datasets: [
      {
        label: 'Statistic',
        data: newValue,
        borderColor: '#E3FFA8',
        tension: 0.4,
        backgroundColor: '#292928',
        borderWidth: 1,
        pointRadius: 0,
        pointHoverBackgroundColor: '#E3FFA8',
        hitRadius: 5,
        pointHoverRadius: 5,
      },
    ],
  };

  return (
    <>
      <Line
        options={options}
        ref={chartRef}
        data={data}
        style={{ width: '100%', fontSize: '10px' }}
      />
      <div
        className={styles.graphTooltip}
        style={{
          top: tooltip.top,
          left: tooltip.left,
          opacity: tooltip.opacity,
          display: tooltip.display,
        }}
      >
        <button className={styles.closeBtn}>
          <CloseCircle width={16} height={16} stroke={'#B6B6B6'} />
        </button>
        <div className={styles.tooltipField}>
          <p className={styles.tooltipValue}>{tooltip.value}</p>
          <p className={styles.tooltipTitle}>
            {type === 'calories' ? 'calories' : 'milliliters'}
          </p>
        </div>
      </div>
    </>
  );
};

Graph.propTypes = {
  type: PropTypes.string.isRequired,
  graphData: PropTypes.arrayOf(
    PropTypes.exact({
      period: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
      value: PropTypes.number.isRequired,
    })
  ),
};

export default Graph;

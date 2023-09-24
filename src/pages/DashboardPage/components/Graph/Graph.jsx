import styles from './Graph.module.scss'
import { useRef, useState } from 'react';
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
import { Line } from 'react-chartjs-2';
import isEqual from 'lodash.isequal';
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

const Graph = ({labels, graphData}) => {
  const chartRef = useRef(null) //create reference hook
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
        text: 'Chart.js Line Chart',
      },
      tooltip: {
        enabled: false,
        position: 'nearest',
        external: context => {
          const tooltipModel = context.tooltip

          if (tooltipModel.opacity === 0) {
            if (tooltip.opacity !== 0) {
              setTooltip(prev => ({ ...prev, opacity: 0, display: 'none' }))
              return
            }
          }
          const position = context.chart.canvas.getBoundingClientRect()
          const newTooltipData = {
            opacity: 1,
            display: "block",
            left: position.left + tooltipModel.caretX,
            top: position.top + tooltipModel.caretY,
            date: tooltipModel.dataPoints[0].label,
            value: tooltipModel.dataPoints[0].formattedValue,
          }

          if (!isEqual(tooltip, newTooltipData)) setTooltip(newTooltipData)
          
        },
      },
    },
    indexAxis: 'x',
    scales: {
      x: {
        ticks: {
          padding: 6,
        },
        beginAtZero: false,
        grid: {
          color: '#292928',
          offset: true,
          tickLength: 0,
        },
        border: {
          color: '#292928',
        }
      },
      y: {
        ticks: {
          stepSize: 1000,
          padding: 8,
        },
        beginAtZero: true,
        grid: {
          color: '#292928',
          tickLength: 0,
        },
        border: {
          color: '#292928',
        }
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: graphData,
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
      <Line options={options} ref={chartRef} data={data} />
        <div className={styles.graphTooltip} style={{ top: tooltip.top, left: tooltip.left, opacity: tooltip.opacity, display: tooltip.display }}>
          <button className={styles.closeBtn}>
            <CloseCircle width={16} height={16} stroke={'#B6B6B6'} />
          </button>
          <div className={styles.tooltipField}>
            <p className={styles.tooltipValue}>{tooltip.value}</p>
            <p className={styles.tooltipTitle}>calories</p>
          </div>
        </div>
    </>
  )
};

export default Graph;
import styles from './DashboardPage.module.scss';
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
import Modal from "./Modal";
import { ReactComponent as GoBackBtn } from '@/assets/svg/arrow-right-liqht.svg';
import { ReactComponent as ToggleBtn } from '@/assets/svg/arrow-down.svg';
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

const GraphTooltip = () => {
  return (
    <div className={styles.graphTooltip}>
      <button className={styles.closeBtn}>
        <CloseCircle width={16} height={16} stroke={'#B6B6B6'} />
      </button>
      <p>1750</p>
      <p>calories</p>
    </div>
  );
};

export const options = {
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
    // tooltip: {
    //     enabled: false,
    //     external: customTooltip,
    //   },
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

// const labelsMonthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const labelsDays = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
const weightTest = ['61', '61', '61', '61', '61', '64', '64', '64', '64', '64', '64', '64', '64', '64', '65', '65', '65', '65', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

export const data = {
  labels: labelsDays,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1500, 1450, 1300, 1210, 1560, 1700, 1000, 2000, 1500, 1120, 2000, 1200, 1600, 1500, 1510, 1200, 1800, 2000, 1200, 1200, 1400, 2000, 1300, 2500, 1000, 3000, 2500, 1200, 1500, 3000, 2100],
      fill: 'origin',
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

const DashboardPage = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "");

  const [showModal, setShowModal] = useState(false);
  const [showLastMonth, setShowLastMonth] = useState(true);

  const closeModal = () => {
    if (showModal) {
      setShowModal(false);
    }
  };

  const toggleModal = () => {
      setShowModal(!showModal)
  };

  const handleOnClick = () => {
    setShowLastMonth(!showLastMonth);
    closeModal();
    };
    

  return (
    <section>
      <div className={styles.titleField}>
        <div className={styles.lastPeriodField}>
          <Link to={backLinkLocationRef.current} className={styles.dashboardLink}><GoBackBtn width={16} height={16} className={styles.goBackBtn} /></Link>
          <h2 className={styles.dashboardTitle}>{showLastMonth ? "Last month" : "Last year"}</h2>
          <button type="button" className={styles.toggleBtn} onClick={toggleModal}>
            <ToggleBtn width={16} height={16} stroke={'#E3FFA8'} />
          </button>
          {showModal &&
            <Modal onClose={closeModal}>
              <button type="button" className={styles.lastButton} onClick={handleOnClick}>
                {showLastMonth ? "Last year" : "Last month"}
              </button>
            </Modal>}
        </div>
        <h3 className={styles.monthTitle}>November</h3>
      </div>
      {showLastMonth ?
        <ul>
          <li>
            <div className={styles.chartTitleField}>
              <GraphTooltip/>
              <h4 className={styles.chartTitle}>Calories</h4>
              <p className={styles.average}>Average value: <span className={styles.averageValue}>1700 kg</span></p>
            </div>
            <div className={styles.chart}>
              <Line options={options} data={data} />
            </div>
          </li>
          <li>
            <h4>Water</h4>
            <p>Average value: <span>1700 ml</span></p>
          </li>
          <li>
            <h4>Weight</h4>
            <p>Average value: <span>68 kg</span></p>
            <ul>
              {labelsDays.map(day => <li key={day}>{day}</li>)}
              {weightTest.map(weight => <li key={weight}>{weight}</li>)}
            </ul>
          </li>
        </ul> : <p>Last year</p>}
    </section>
  );
};

export default DashboardPage;

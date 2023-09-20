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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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
  },
  indexAxis: 'x',
    scales: {
      x: {
        beginAtZero: false
      }
    }
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
      tension: 0.2,
      backgroundColor: '#292928',
      pointBackgroundColor: '#E3FFA8',
      pointRadius: '5',
      spanGaps: true,
      cubicInterpolationMode: 'default'
    },
  ],
};

const DashboardPage = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "")
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
      <div className={styles.lastPeriodField}>
        <Link to={backLinkLocationRef.current}>Go back</Link>
        <button type="button" className={styles.lastButton} onClick={toggleModal}>
        {showLastMonth ? "Last month" : "Last year"}
      </button>
      {showModal &&
        <Modal onClose={closeModal}>
          <button type="button" className={styles.lastButton} onClick={handleOnClick}>
            {showLastMonth ? "Last year" : "Last month"}
          </button>
        </Modal>}
      </div>
      {showLastMonth ?
        <ul>
        <li>
          <h2>Calories</h2>
            <p>Average value: <span>1700 kg</span></p>
            <div className={styles.chart}><Line options={options} data={data} /></div>
          
        </li>
        <li>
          <h2>Water</h2>
          <p>Average value: <span>1700 ml</span></p>
        </li>
        <li>
          <h2>Weight</h2>
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

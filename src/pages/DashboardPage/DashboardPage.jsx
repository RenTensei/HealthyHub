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
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 25, 2, 8, 41, 20, 2],
      fill: false,
      borderColor: '#E3FFA8',
      tension: 0.1,
      backgroundColor: '#292928',
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
          <button type="button" onClick={handleOnClick}>
            {showLastMonth ? "Last year" : "Last month"}
          </button>
        </Modal>}
      </div>
      {showLastMonth ?
        <ul>
        <li>
          <h2>Calories</h2>
          <p>Average value: <span>1700 kg</span></p>
          <Line options={options} data={data} />
        </li>
        <li>
          <h2>Water</h2>
          <p>Average value: <span>1700 ml</span></p>
        </li>
        <li>
          <h2>Weight</h2>
          <p>Average value: <span>68 kg</span></p>
        </li>
      </ul> : <p>Last year</p>}
    </section>
  );
};

export default DashboardPage;

import styles from './DashboardPage.module.scss';
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "./Modal";
import Chart from './Chart';
import { ReactComponent as GoBackBtn } from '@/assets/svg/arrow-right-liqht.svg';
import { ReactComponent as ToggleBtn } from '@/assets/svg/arrow-down.svg';
import { labelsDays } from './Chart/Chart';
import { ROUTES } from '@/constants/routes';

const weightTest = ['61', '61', '61', '61', '61', '64', '64', '64', '64', '64', '64', '64', '64', '64', '65', '65', '65', '65', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

const DashboardPage = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? ROUTES.MainPage);

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
              <h4 className={styles.chartTitle}>Calories</h4>
              <p className={styles.average}>Average value: <span className={styles.averageValue}>1700 kg</span></p>
            </div>
            <div className={styles.chartCont}>
              <div className={styles.chart}>
                <Chart />
              </div>
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
              {labelsDays.map((day, index) => <li key={index}>{day}</li>)}
              {weightTest.map((weight, index) => <li key={index}>{weight}</li>)}
            </ul>
          </li>
        </ul> : <p>Last year</p>}
    </section>
  );
};

export default DashboardPage;
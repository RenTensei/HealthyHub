import styles from './DashboardPage.module.scss';
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "./components/Modal";
import DataList from './components/DataList';
import { ReactComponent as GoBackBtn } from '@/assets/svg/arrow-right-liqht.svg';
import { ReactComponent as ToggleBtn } from '@/assets/svg/arrow-down.svg';
import { ROUTES } from '@/constants/routes';

const DashboardPage = () => {
  const monthlyStatistics = [
    { day: 1, calories: 1690, water: 1350, weight: 58 },
    { day: 2, calories: 2000, water: 1800, weight: 58 },
    { day: 3, calories: 2100, water: 1800, weight: 59 },
    { day: 4, calories: 2510, water: 2700, weight: 60 },
    { day: 5, calories: 1800, water: 3000, weight: 61 },
    { day: 6, calories: 1710, water: 2600, weight: 59 },
    { day: 7, calories: 2900, water: 2900, weight: 59 },
    { day: 8, calories: 0, water: 1350, weight: 58 },
    { day: 9, calories: 2600, water: 2450, weight: 59 },
    { day: 10, calories: 1500, water: 1350, weight: 59 },
    { day: 11, calories: 1520, water: 2450, weight: 59 },
    { day: 12, calories: 1600, water: 2700, weight: 59 },
    { day: 13, calories: 2600, water: 1800, weight: 61 },
    { day: 14, calories: 2700, water: 1690, weight: 61 },
    { day: 15, calories: 2100, water: 2700, weight: 61 },
    { day: 16, calories: 1800, water: 1350, weight: 59 },
    { day: 17, calories: 2300, water: 2300, weight: 58 },
    { day: 18, calories: 1200, water: 1350, weight: 60 },
    { day: 19, calories: 0, water: 0, weight: 60 },
    { day: 20, calories: 0, water: 3000, weight: 60 },
    { day: 21, calories: 1690, water: 1350, weight: 59 },
    { day: 22, calories: 3000, water: 1500, weight: 59 },
    { day: 23, calories: 1200, water: 1350, weight: 58 },
    { day: 24, calories: 3000, water: 1350, weight: 60 },
    { day: 25, calories: 1500, water: 2000, weight: 58 },
    { day: 26, calories: 2000, water: 1500, weight: 58 },
    { day: 27, calories: 1150, water: 2000, weight: 58 },
    { day: 28, calories: 2000, water: 1690, weight: 58 },
    { day: 29, calories: 2450, water: 1350, weight: 58 },
    { day: 30, calories: 2000, water: 1520, weight: 58 },
    { day: 31, calories: 1690, water: 2100, weight: 58 },
  ];

const yearlyStatistics = [
  { month: 'January', calories: 1690, water: 2000, weight: 58 },
  { month: 'February', calories: 1800, water: 1350, weight: 58 },
  { month: 'March', calories: 2100, water: 1500, weight: 61 },
  { month: 'April', calories: 2000, water: 2500, weight: 63 },
  { month: 'May', calories: 1800, water: 2410, weight: 59 },
  { month: 'June', calories: 2100, water: 2100, weight: 60 },
  { month: 'July', calories: 1200, water: 1600, weight: 59 },
  { month: 'Augest', calories: 2000, water: 1900, weight: 59 },
  { month: 'September', calories: 1800, water: 1950, weight: 60 },
  { month: 'October', calories: 1700, water: 2000, weight: 60 },
  { month: 'November', calories: 1850, water: 2100, weight: 59 },
  { month: 'December', calories: 1710, water: 1780, weight: 58 },
];
  
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
        <DataList statistic={monthlyStatistics} /> : <DataList statistic={yearlyStatistics} />}
    </section>
  );
};

export default DashboardPage;
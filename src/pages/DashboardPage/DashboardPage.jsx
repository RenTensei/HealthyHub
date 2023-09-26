import styles from './DashboardPage.module.scss';
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "./components/Modal";
import DataList from './components/DataList';
import { ReactComponent as GoBackBtn } from '@/assets/svg/arrow-right-liqht.svg';
import { ReactComponent as ToggleBtn } from '@/assets/svg/arrow-down.svg';
import { ROUTES } from '@/constants/routes';
import { monthlyStatistics, yearlyStatistics } from './variables';
import { getMonthStatistic } from './service/dashboard-service';

const DashboardPage = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? ROUTES.MainPage);

  const [showModal, setShowModal] = useState(false);
  const [showLastMonth, setShowLastMonth] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [water, setWater] = useState([{period: 1, value: 1000}, {period: 2, value: 1000}]);
  const [calories, setCalories] = useState([{period: 1, value: 1000}, {period: 2, value: 1000}]);
  const [weight, setWeight] = useState([{period: 1, value: 1000}, {period: 2, value: 1000}]);

  useEffect(() => {
    const query = showLastMonth ? 'month' : 'year'
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await getMonthStatistic(query);

        const statWater = data.water.map(item => {
          return showLastMonth ? { period: item._id.day, value: item.water } : { period: item._id.month, value: item.avgMonth }
        });

        const statCalories = data.calories.map(item => {
          return showLastMonth ? { period: item._id.day, value: item.calories } : { period: item._id.month, value: item.avgMonth }
        });

        const statWeight = data.weight.map(item => {
          return showLastMonth ? { period: item._id.day, value: item.weight } : { period: item._id.month, value: item.avgMonth }
        });

        setWater(statWater);
        setCalories(statCalories);
        setWeight(statWeight);
      } catch (error) {
        console.log(error.message)
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [showLastMonth]);

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
          <Link to={backLinkLocationRef.current} className={styles.dashboardLink}><GoBackBtn width={24} height={24} className={styles.goBackBtn} /></Link>
          <h2 className={styles.dashboardTitle}>{showLastMonth ? "Last month" : "Last year"}</h2>
          <button type="button" className={`${styles.toggleBtn} ${showModal && styles.toggleIsActive}`} onClick={toggleModal}>
            <ToggleBtn width={16} height={16} stroke={'#E3FFA8'} />
          </button>
          {showModal &&
            <Modal onClose={closeModal}>
              <button type="button" className={styles.lastButton} onClick={handleOnClick}>
                {showLastMonth ? "Last year" : "Last month"}
              </button>
            </Modal>}
        </div>
        <h3 className={styles.monthTitle}>{showLastMonth ? "November" : "2023"}</h3>
      </div>
      <DataList statistic={monthlyStatistics} water={water} calories={calories} weight={weight} lastMonth={showLastMonth} />
    </section>
  );
};

export default DashboardPage;
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import styles from './DashboardPage.module.scss';
import DataList from './components/DataList';
import Modal from './components/Modal';
import { getMonthStatistic } from './service/dashboard-service';
import {
  initialValueGraph,
  monthLabelsForGraph,
  monthLabelsForWeight,
} from './variables';

import { ReactComponent as ToggleBtn } from '@/assets/svg/arrow-down.svg';
import { ReactComponent as GoBackBtn } from '@/assets/svg/arrow-right-liqht.svg';
import { Fetcher } from '@/components/Loaders/Fetcher';
import { ROUTES } from '@/constants/routes';

const DashboardPage = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? ROUTES.MainPage);

  const [showModal, setShowModal] = useState(false);
  const [showLastMonth, setShowLastMonth] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [water, setWater] = useState(initialValueGraph);
  const [calories, setCalories] = useState(initialValueGraph);
  const [weight, setWeight] = useState(initialValueGraph);
  const [title, setTitle] = useState('Month');

  useEffect(() => {
    const query = showLastMonth ? 'month' : 'year';
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await getMonthStatistic(query);

        const statWater = data.water.map(item => {
          return showLastMonth
            ? { period: item._id.day, value: Math.round(item.water * 2) / 2 }
            : {
                period: monthLabelsForGraph[item._id.month],
                value: Math.round(item.avgMonth * 2) / 2,
              };
        });

        const statCalories = data.calories.map(item => {
          return showLastMonth
            ? { period: item._id.day, value: Math.round(item.calories * 2) / 2 }
            : {
                period: monthLabelsForGraph[item._id.month],
                value: Math.round(item.avgMonth * 2) / 2,
              };
        });

        const statWeight = data.weight.map(item => {
          return showLastMonth
            ? { period: item._id.day, value: Math.round(item.weight * 2) / 2 }
            : {
                period: monthLabelsForWeight[item._id.month],
                value: Math.round(item.avgMonth * 2) / 2,
              };
        });

        const lastLabel = Math.round(
          data.calories
            .map(item => {
              if (!data.calories) {
                return showLastMonth ? 'Month' : 'Year';
              }
              return showLastMonth ? item._id.month : item._id.year;
            })
            .reduce((partialSum, a) => partialSum + a, 0) / data.calories.length
        );

        setWater(statWater);
        setCalories(statCalories);
        setWeight(statWeight);
        setTitle(lastLabel);
      } catch (error) {
        toast.error('Unable to download statistics');
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
    setShowModal(!showModal);
  };

  const handleOnClick = () => {
    setShowLastMonth(!showLastMonth);
    closeModal();
  };

  return (
    <section>
      {isLoading && <Fetcher />}
      <div className={styles.titleField}>
        <div className={styles.lastPeriodField}>
          <Link
            to={backLinkLocationRef.current}
            className={styles.dashboardLink}
          >
            <GoBackBtn
              strokeWidth={2}
              width={24}
              height={24}
              className={styles.goBackBtn}
            />
          </Link>
          <h2 className={styles.dashboardTitle}>
            {showLastMonth ? 'Last month' : 'Last year'}
          </h2>
          <button
            type="button"
            className={`${styles.toggleBtn} ${
              showModal && styles.toggleIsActive
            }`}
            onClick={toggleModal}
          >
            <ToggleBtn width={16} height={16} stroke={'#E3FFA8'} />
          </button>
          {showModal && (
            <Modal onClose={closeModal}>
              <button
                type="button"
                className={styles.lastButton}
                onClick={handleOnClick}
              >
                {showLastMonth ? 'Last year' : 'Last month'}
              </button>
            </Modal>
          )}
        </div>
        <h3 className={styles.monthTitle}>
          {showLastMonth && title
            ? `${monthLabelsForWeight[title]}` ?? title
            : `${title}`}
        </h3>
      </div>
      <DataList
        water={water}
        calories={calories}
        weight={weight}
        lastMonth={showLastMonth}
      />
    </section>
  );
};

export default DashboardPage;

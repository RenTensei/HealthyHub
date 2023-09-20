import Diary from './components/Diary';
import Water from './components/Water';
import Food from './components/Food';
import DailyGoal from './DailyGoal';
// import ModalWaterIntake from './Modals/ModalWaterIntake/ModalWaterIntake';
// import ModalRecordMeal from './Modals/ModalRecordMeal/ModalRecordMeal';
import styles from './MainPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

import { ReactComponent as ArrowRightSvg } from '@/assets/svg/arrow-right.svg';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <ModalRecordMeal
        meal="Breakfast"
        srcImg="/Breakfast.png"
        srcSet="/Breakfast.png, /Breakfast@2x.png"
        alt="Breakfast"
      />
      <ModalWaterIntake /> */}

      <div className={styles.today_container}>
        <p className={styles.today_title}>Today</p>

        <a
          className={styles.goal_link}
          onClick={() => navigate(ROUTES.DashboardPage)}
        >
          On the way to the goal
        </a>

        <ArrowRightSvg width={16} height={16} stroke="#B6B6B6" />
      </div>

      <div className={styles.today_wrapper}>
        <div className={styles.daily_goal_container}>
          <DailyGoal />
          <Water />
        </div>
        <Food />
      </div>
      <Diary />
    </>
  );
};

export default MainPage;

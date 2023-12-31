import { Link } from 'react-router-dom';

import DailyGoal from './DailyGoal';
import styles from './MainPage.module.scss';
import Diary from './components/Diary';
import Food from './components/Food';
import useModal from './components/Modal/useModal';
import RecommendedFood from './components/RecommendedFood';
import Water from './components/Water';

import { ReactComponent as ArrowRightSvg } from '@/assets/svg/arrow-right.svg';
import { ROUTES } from '@/constants/routes';
import { MealProvider } from '@/context/MealContext';
import ModalWaterIntake from '@/pages/MainPage/Modals/ModalWaterIntake/ModalWaterIntake';
import ModalPortal from '@/pages/MainPage/components/Modal/ModaPortalCreator';

const MainPage = () => {
  const { isWaterIntakeShowing, waterModalToggle } = useModal();

  return (
    <MealProvider>
      <ModalPortal isShowing={isWaterIntakeShowing} hide={waterModalToggle}>
        <ModalWaterIntake hide={waterModalToggle} />
      </ModalPortal>

      <div className={styles.today_container}>
        <p className={styles.today_title}>Today</p>

        <Link className={styles.goal_link} to={ROUTES.DashboardPage}>
          On the way to the goal
        </Link>

        <ArrowRightSvg
          width={16}
          height={16}
          stroke="#B6B6B6"
          strokeWidth="2px"
          style={{ transform: 'scale(-1, 1)' }}
        />
      </div>

      <div className={styles.today_wrapper}>
        <div className={styles.daily_goal_container}>
          <DailyGoal />
          <Water openModal={waterModalToggle} />
        </div>
        <Food />
      </div>
      <div className={styles.diary_recfood_container}>
        <Diary />
        <RecommendedFood />
      </div>
    </MealProvider>
  );
};

export default MainPage;

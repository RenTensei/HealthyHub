import Diary from './components/Diary';
import Water from './components/Water';
import Food from './components/Food';
import DailyGoal from './DailyGoal';
// import ModalWaterIntake from './Modals/ModalWaterIntake/ModalWaterIntake';
// import ModalRecordMeal from './Modals/ModalRecordMeal/ModalRecordMeal';
import styles from './MainPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

import ModalPortal from '@/pages/MainPage/components/Modal/ModaPortalCreator';
import ModalRecordMeal from '@/pages/MainPage/Modals/ModalRecordMeal/ModalRecordMeal';
import ModalWaterIntake from '@/pages/MainPage/Modals/ModalWaterIntake/ModalWaterIntake';

import { ReactComponent as ArrowRightSvg } from '@/assets/svg/arrow-right.svg';
import useModal from './components/Modal/useModal';

const MainPage = () => {
  const navigate = useNavigate();
  const { isRecordMealShowing, mealModalToggle } = useModal();
  const { isWaterIntakeShowing, waterModalToggle } = useModal();

  return (
    <>
      <button className="button-default" onClick={mealModalToggle}>
        Show Modal
      </button>
      <ModalPortal isShowing={isRecordMealShowing} hide={mealModalToggle}>
        <ModalRecordMeal hide={mealModalToggle} />
      </ModalPortal>
      <ModalPortal isShowing={isWaterIntakeShowing} hide={waterModalToggle}>
        <ModalWaterIntake hide={waterModalToggle} />
      </ModalPortal>
      {/* <ModalRecordMeal
        meal="Breakfast"
        srcImg="/Breakfast.png"
        srcSet="/Breakfast.png, /Breakfast@2x.png"
        alt="Breakfast"
      /> */}

      <div className={styles.today_container}>
        <p className={styles.today_title}>Today</p>

        <a
          className={styles.goal_link}
          onClick={() => navigate(ROUTES.DashboardPage)}
        >
          On the way to the goal
        </a>

        <ArrowRightSvg
          width={16}
          height={16}
          stroke="#B6B6B6"
          stroke-width="2px"
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
      <Diary openModal={mealModalToggle} />
    </>
  );
};

export default MainPage;

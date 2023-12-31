import { useSelector } from 'react-redux';

import styles from './DailyGoal.module.scss';

import { ReactComponent as CaloriesSvg } from '@/assets/svg/calories.svg';
import { ReactComponent as WaterSvg } from '@/assets/svg/water.svg';

const DailyGoal = () => {
  const userData = useSelector(state => state.auth.user);

  return (
    <div className={styles.daily_goal_block}>
      <h3 className={styles.daily_goal_title}>Daily goal</h3>

      <div className={styles.goal_container}>
        <div className={styles.daily_goal_container}>
          <CaloriesSvg />
          <div>
            <h4>Calories</h4>
            <p>{Math.round(userData.BMR)}</p>
          </div>
        </div>

        <div className={styles.daily_goal_container}>
          <WaterSvg />
          <div>
            <h4>Water</h4>
            <div className={styles.water_container}>
              1500 <span className={styles.ml}> ml</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyGoal;

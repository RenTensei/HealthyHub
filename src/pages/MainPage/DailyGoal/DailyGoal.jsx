import styles from './DailyGoal.module.scss';

import CaloriesSVG from './svgImages/calories';
import WaterSVG from './svgImages/water';

const DailyGoal = () => {
  return (
    <div>
      <h2>Daily goal</h2>
      <div className={styles.goal_container}>
        <div className={styles.goal_wrapper}>
          <div className={styles.daily_goal_container}>
            <CaloriesSVG />
            <div>
              <h3>Calories</h3>
              <p>1100</p>
            </div>
          </div>
          <div className={styles.daily_goal_container}>
            <WaterSVG />
            <div>
              <h3>Water</h3>
              <p>500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyGoal;

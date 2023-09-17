import styles from './DailyGoal.module.scss';

import CaloriesSVG from './svgImages/caloriesSVG';
import WaterSVG from './svgImages/waterSVG';

const DailyGoal = () => {
  return (
    <div>
      <h2 className={styles.daily_title}>Daily goal</h2>
      <div className={styles.goal_container}>
        <div className={styles.goal_wrapper}>
          <div className={styles.daily_goal_container}>
            <CaloriesSVG />
            <div>
              <h3>Calories</h3>
              <p>1700</p>
            </div>
          </div>
          <div className={styles.daily_goal_container}>
            <WaterSVG />
            <div>
              <h3>Water</h3>
              <div className={styles.water_container}>
                1500 <span className={styles.ml}> ml</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyGoal;

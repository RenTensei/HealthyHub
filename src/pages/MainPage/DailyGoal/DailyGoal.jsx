import styles from './DailyGoal.module.scss';

import CaloriesSVG from './svgImages/caloriesSVG';
import WaterSVG from './svgImages/waterSVG';

const DailyGoal = () => {
  return (
    <div className={styles.daily_goal_block}>
      <h3 className={styles.daily_goal_title}>Daily goal</h3>

      <div className={styles.goal_container}>
        <div className={styles.daily_goal_container}>
          <CaloriesSVG />
          <div>
            <h4>Calories</h4>
            <p>1700</p>
          </div>
        </div>

        <div className={styles.daily_goal_container}>
          <WaterSVG />
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

import styles from './Bar.module.scss';
import { selectWater } from '@/store/features/waterIntake/selectors';

import { ReactComponent as AddSvg } from '@/assets/svg/add.svg';
import { useSelector } from 'react-redux';

const Bar = ({ openModal }) => {
  const waterConsumed = useSelector(selectWater);
  const waterConsumption = waterConsumed.volume;

  let percentageColor = '#B6C3FF';
  if (waterConsumption > 1110) {
    percentageColor = '#ffff';
  }
  const calculateConsumptionPercentage = waterConsumption => {
    if (waterConsumption > 1500) {
      return 100;
    }
    return (waterConsumption / 1500) * 100;
  };
  const prc = Math.round(
    calculateConsumptionPercentage(waterConsumption) * 0.01 * 176
  );

  const prcFill = `${prc}px`;

  const calculateLeft = waterConsumption => {
    const left = 1500 - waterConsumption;
    if (left < 0) {
      return 0;
    }
    return left;
  };

  return (
    <div className={styles.bar_container}>
      <div className={styles.outer_bar}>
        <div className={styles.intermedeate_bar}>
          <p
            style={{
              color: percentageColor,
            }}
            className={styles.percentage}
          >{`${Math.round(
            calculateConsumptionPercentage(waterConsumption)
          )}%`}</p>
          <div
            style={{
              height: prcFill,
            }}
            className={styles.inner_bar}
          ></div>
        </div>
      </div>
      <div className={styles.statistic_wrapper}>
        <div>
          <div className={styles.statistic_container}>
            <h3 className={styles.statistic_title}>Water consumption</h3>

            <div className={styles.consumption_statistic}>
              <div>
                <p className={styles.water_consumption}>{waterConsumption}</p>
                <span>ml</span>
              </div>
              <div>
                <p>left:</p>
                <span style={{ fontWeight: 500 }}>
                  {calculateLeft(waterConsumption)}
                </span>
                <span>ml</span>
              </div>
            </div>
          </div>
          <button onClick={openModal} className={styles.intake_button}>
            <AddSvg width={16} strokeWidth={3} />
            Add water intake
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bar;

import styles from './Bar.module.scss';
const Bar = ({ waterConsumption }) => {
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
                <span className={styles.white_text}>{waterConsumption}</span>
                <p className={styles.grey_text}> ml</p>
              </div>
              <p>
                <span className={styles.white_text}> left:</span>
                {calculateLeft(waterConsumption)} ml
              </p>
            </div>
          </div>
          <button className={styles.intake_button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 8H12"
                stroke="#0F0F0F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12V4"
                stroke="#0F0F0F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add water intake
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bar;

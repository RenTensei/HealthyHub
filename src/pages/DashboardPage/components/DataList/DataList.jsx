import PropTypes from 'prop-types';

import styles from './DataList.module.scss';
import Graph from '../Graph';

const DataList = ({ lastMonth, water, calories, weight }) => {
  const averageCalories = Math.round(
    calories
      .map(({ value }) => value)
      .reduce((partialSum, a) => partialSum + a, 0) / calories.length
  );
  const averageWater = Math.round(
    water
      .map(({ value }) => value)
      .reduce((partialSum, a) => partialSum + a, 0) / water.length
  );
  const averageWeight = Math.round(
    weight
      .map(({ value }) => value)
      .reduce((partialSum, a) => partialSum + a, 0) / weight.length
  );

  return (
    <div>
      <div className={styles.desktopGraphField}>
        <div>
          <div className={styles.chartTitleField}>
            <h4 className={styles.chartTitle}>calories</h4>
            <p className={styles.average}>
              Average value:
              <span
                className={styles.averageValue}
              >{`${averageCalories} calories`}</span>
            </p>
          </div>
          <div className={styles.chartCont}>
            <div className={styles.chart}>
              <Graph graphData={calories} type={'calories'} />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.chartTitleField}>
            <h4 className={styles.chartTitle}>water</h4>
            <p className={styles.average}>
              Average value:
              <span
                className={styles.averageValue}
              >{`${averageWater} ml`}</span>
            </p>
          </div>
          <div className={styles.chartCont}>
            <div className={styles.chart}>
              <Graph graphData={water} type={'water'} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.chartTitleField}>
          <h4 className={styles.chartTitle}>weight</h4>
          <p className={styles.average}>
            Average value:
            <span className={styles.averageValue}>{`${averageWeight} kg`}</span>
          </p>
        </div>
        <div className={styles.weightCont}>
          <div className={styles.weightField}>
            {weight.map((item, index) => (
              <div key={index} className={styles.weightData}>
                <p
                  className={
                    lastMonth
                      ? styles.dataWeightItemMonth
                      : styles.dataWeightItemYear
                  }
                >
                  {item.value}
                </p>
                <p className={styles.labelWeightItem}>{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

DataList.propTypes = {
  lastMonth: PropTypes.bool.isRequired,
  water: PropTypes.arrayOf(
    PropTypes.exact({
      period: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
      value: PropTypes.number.isRequired,
    })
  ),
  calories: PropTypes.arrayOf(
    PropTypes.exact({
      period: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
      value: PropTypes.number.isRequired,
    })
  ),
  weight: PropTypes.arrayOf(
    PropTypes.exact({
      period: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
      value: PropTypes.number.isRequired,
    })
  ),
};

export default DataList;

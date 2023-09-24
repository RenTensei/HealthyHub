import styles from './DataList.module.scss';
import Graph from '../Graph';

const DataList = ({ statistic }) => {
  const graphTitle = statistic.map(item => Object.keys(item));
  const labels = statistic.map(item => Object.values(item)[0]);
  const dataCalories = statistic.map(item => Object.values(item)[1]);
  const dataWater = statistic.map(item => Object.values(item)[2]);
  const dataWeight = statistic.map(item => ({
    data: Object.values(item)[3],
    label: Object.values(item)[0]
  }));
  const averageCalories = Math.round(statistic.map(item => Object.values(item)[1]).reduce((partialSum, a) => partialSum + a, 0) / labels.length);
  const averageWater = Math.round(statistic.map(item => Object.values(item)[2]).reduce((partialSum, a) => partialSum + a, 0) / labels.length);
  const averageWeight = Math.round(statistic.map(item => Object.values(item)[3]).reduce((partialSum, a) => partialSum + a, 0) / labels.length);
  
  return (
    <ul>
      <li key={graphTitle[0][1]}>
        <div className={styles.chartTitleField}>
          <h4 className={styles.chartTitle}>{graphTitle[0][1]}</h4>
          <p className={styles.average}>Average value: <span className={styles.averageValue}>{`${averageCalories} kg`}</span></p>
        </div>
        <div className={styles.chartCont}>
          <div className={styles.chart}>
            <Graph labels={labels} graphData={dataCalories} />
          </div>
        </div>
      </li>
      <li key={graphTitle[0][2]}>
        <div className={styles.chartTitleField}>
          <h4 className={styles.chartTitle}>{graphTitle[0][2]}</h4>
          <p className={styles.average}>Average value: <span className={styles.averageValue}>{`${averageWater} ml`}</span></p>
        </div>
        <div className={styles.chartCont}>
          <div className={styles.chart}>
            <Graph labels={labels} graphData={dataWater} />
          </div>
        </div>
      </li>
      <li key={graphTitle[0][3]}>
        <div className={styles.chartTitleField}>
          <h4 className={styles.chartTitle}>{graphTitle[0][3]}</h4>
          <p className={styles.average}>Average value: <span className={styles.averageValue}>{`${averageWeight} kg`}</span></p>
        </div>
        <div className={styles.weightCont}>
          <ul className={styles.weightField}>
            {dataWeight.map((item, index) => (
              <li key={index} className={styles.weightData}>
                <p className={styles.dataWeightItem}>{item.data}</p>
                <p className={styles.labelWeightItem}>{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </ul>
  )
};

export default DataList;
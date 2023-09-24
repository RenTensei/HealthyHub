import styles from './DataList.module.scss';
import Graph from '../Graph';

const DataList = ({ statistic, typeData }) => {
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
    <div>
      <div className={styles.desktopGraphField}>
        <div>
          <div className={styles.chartTitleField}>
            <h4 className={styles.chartTitle}>{graphTitle[0][1]}</h4>
            <p className={styles.average}>Average value:<span className={styles.averageValue}>{`${averageCalories} kg`}</span></p>
          </div>
          <div className={styles.chartCont}>
            <div className={styles.chart}>
              <Graph labels={labels} graphData={dataCalories} />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.chartTitleField}>
            <h4 className={styles.chartTitle}>{graphTitle[0][2]}</h4>
            <p className={styles.average}>Average value:<span className={styles.averageValue}>{`${averageWater} ml`}</span></p>
          </div>
          <div className={styles.chartCont}>
            <div className={styles.chart}>
              <Graph labels={labels} graphData={dataWater} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.chartTitleField}>
          <h4 className={styles.chartTitle}>{graphTitle[0][3]}</h4>
          <p className={styles.average}>Average value:<span className={styles.averageValue}>{`${averageWeight} kg`}</span></p>
        </div>
        <div className={styles.weightCont}>
          <div className={styles.weightField}>
            {dataWeight.map((item, index) => (
              <div key={index} className={styles.weightData}>
                <p className={typeData ? styles.dataWeightItemMonth : styles.dataWeightItemYear}>{item.data}</p>
                <p className={styles.labelWeightItem}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default DataList;
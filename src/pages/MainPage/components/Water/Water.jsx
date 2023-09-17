import styles from './Water.module.scss';

import Bar from '../Bar';

const Water = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Water</h2>
      <Bar waterConsumption={11110} />
    </div>
  );
};

export default Water;

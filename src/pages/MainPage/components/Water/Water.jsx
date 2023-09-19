import styles from './Water.module.scss';

import Bar from '../Bar';

const Water = () => {
  return (
    <div>
      <h3 className={styles.title}>Water</h3>
      <Bar waterConsumption={1150} />
    </div>
  );
};

export default Water;

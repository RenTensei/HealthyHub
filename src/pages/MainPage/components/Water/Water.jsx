import styles from './Water.module.scss';

import Bar from '../Bar';

const Water = () => {
  return (
    <>
      <h2 className={styles.title}>Water</h2>
      <Bar waterConsumption={11110} />
    </>
  );
};

export default Water;

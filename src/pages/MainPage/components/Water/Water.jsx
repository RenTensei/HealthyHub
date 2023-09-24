import styles from './Water.module.scss';

import Bar from '../Bar';

const Water = ({ openModal }) => {
  return (
    <div>
      <h3 className={styles.title}>Water</h3>
      <Bar openModal={openModal} />
    </div>
  );
};

export default Water;

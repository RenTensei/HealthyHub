import styles from './RecordMealInput.module.scss';

const RecordMealInput = () => {
  return (
    <div className={styles.list}>
      <input type="text" className={styles.list_item} />
      <input type="text" className={styles.list_item} />
      <input type="text" className={styles.list_item} />
      <input type="text" className={styles.list_item} />
      <input type="text" className={styles.list_item} />
    </div>
  );
};

export default RecordMealInput;

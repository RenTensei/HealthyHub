import styles from './ModalWaterIntake.module.scss';

const ModalWaterIntake = () => {
  return (
    <div className={styles.modal_container}>
      <h2 className={styles.title}>Add water intake</h2>
      <div className={styles.input_container}>
        <h3 className={styles.input_title}>How much water</h3>
        <input
          className={styles.water_input}
          type="text"
          placeholder="Enter milliliters"
        />
        <button className={styles.button_confirm}>Confirm</button>
        <button className={styles.button_cancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ModalWaterIntake;

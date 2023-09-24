import { useDispatch } from 'react-redux';
import styles from './ModalWaterIntake.module.scss';
import { useState } from 'react';
import { postMyWaterIntake } from '@/store/features/waterIntake/thunks';

const ModalWaterIntake = ({ hide }) => {
  const [waterIntake, setWaterIntake] = useState('');
  const dispatch = useDispatch();

  const onChangeHandler = e => {
    setWaterIntake(e.target.value);
  };

  const onConfirmHandler = () => {
    if (waterIntake !== 0) {
      dispatch(postMyWaterIntake({ volume: Number(waterIntake) }));
      hide();
    }
    hide();
  };
  return (
    <div className={styles.modal_container}>
      <h2 className={styles.title}>Add water intake</h2>
      <div className={styles.input_container}>
        <h3 className={styles.input_title}>How much water</h3>
        <input
          className={styles.water_input}
          type="text"
          placeholder="Enter milliliters"
          onChange={onChangeHandler}
        />
        <button className={styles.button_confirm} onClick={onConfirmHandler}>
          Confirm
        </button>
        <button className={styles.button_cancel} onClick={hide}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalWaterIntake;

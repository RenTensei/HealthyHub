// import { useDispatch } from 'react-redux';
import styles from './RecordMealInput.module.scss';
// import { useState } from 'react';
// import { postMyFoodIntake } from '@/store/features/foodIntake/thunks';

const RecordMealInput = ({ stateHandlres }) => {
  const [
    mealHandler,
    carbHandler,
    proteinHandler,
    fatHandler,
    caloriesHandler,
  ] = stateHandlres;
  const onChangeHandler = (e, setValue) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.list}>
      <input
        type="text"
        className={styles.list_item}
        onChange={e => onChangeHandler(e, mealHandler)}
      />
      <input
        type="text"
        className={styles.list_item}
        onChange={e => onChangeHandler(e, carbHandler)}
      />
      <input
        type="text"
        className={styles.list_item}
        onChange={e => onChangeHandler(e, proteinHandler)}
      />
      <input
        type="text"
        className={styles.list_item}
        onChange={e => onChangeHandler(e, fatHandler)}
      />
      <input
        type="text"
        className={styles.list_item}
        onChange={e => onChangeHandler(e, caloriesHandler)}
      />
    </div>
  );
};

export default RecordMealInput;

import { nanoid } from 'nanoid';

// import RenderSvg from '@/components/RenderSvg';
import styles from './ModalRecordMeal.module.scss';
import { useEffect, useState } from 'react';
// import { MealContext } from '@/context/MealContext';
import RecordMealInput from './RecordMealInput/RecordMealInput';
import { useDispatch } from 'react-redux';
import { postMyFoodIntake } from '@/store/features/foodIntake/thunks';
import { ReactComponent as AddMoreSvg } from '@/assets/svg/add.svg';
import OutsideClickHandler from 'react-outside-click-handler';

import { mealTypeSrcSets } from '@/utils/mealTypeSrcSets';

const ModalRecordMeal = ({ onClose, mealType }) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);
  const src1x = mealTypeSrcSets[mealType][0];
  const src2x = mealTypeSrcSets[mealType][1];

  const [mealName, setMealName] = useState('');
  const [carbonohidrates, setCarbonohidrates] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [calories, setCalories] = useState(0);

  const dispatch = useDispatch();
  const [customComponents, setCustomComponents] = useState([]);

  const mealHandler = value => {
    setMealName(value);
  };

  const carbHandler = value => {
    setCarbonohidrates(value);
  };

  const proteinHandler = value => {
    setProtein(value);
  };

  const fatHandler = value => {
    setFat(value);
  };

  const caloriesHandler = value => {
    setCalories(value);
  };

  const addCustomComponent = () => {
    setCustomComponents([
      ...customComponents,
      <RecordMealInput
        key={nanoid()}
        stateHandlres={[
          mealHandler,
          carbHandler,
          proteinHandler,
          fatHandler,
          caloriesHandler,
        ]}
      />,
    ]);
  };

  const onConfirmHandler = () => {
    const stateObject = {
      mealName,
      mealType,
      carbonohidrates: Number(carbonohidrates),
      protein: Number(protein),
      fat: Number(fat),
      calories: Number(calories),
    };
    console.log(stateObject);
    // eslint-disable-next-line no-constant-condition
    if (false) dispatch(postMyFoodIntake(stateObject));

    onClose();
  };

  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      <div className={styles.modal_container}>
        <h2 className={styles.title}>Record your meal</h2>
        <div className={styles.meal_container}>
          <img src={src1x} srcSet={`${src1x} 1x, ${src2x} 2x`} />

          <h3 className={styles.subtitle}>{mealType}</h3>
        </div>

        <div>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              The name of the product or dish
            </li>
            <li className={styles.list_item}>Carbonoh </li>
            <li className={styles.list_item}>Protein </li>
            <li className={styles.list_item}>Fat </li>
            <li className={styles.list_item}>Calories </li>
          </ul>
          <div className={styles.inputs_container}>
            {customComponents?.map((component, index) => (
              <div key={index}>{component}</div>
            ))}
          </div>
        </div>

        <button className={styles.button_add} onClick={addCustomComponent}>
          <AddMoreSvg strokeWidth={3} width={16} height={16} />
          Add more
        </button>

        <div className={styles.buttons_container}>
          <button onClick={onClose} className={styles.button_cancel}>
            Cancel
          </button>
          <button className={styles.button_confirm} onClick={onConfirmHandler}>
            Confirm
          </button>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default ModalRecordMeal;

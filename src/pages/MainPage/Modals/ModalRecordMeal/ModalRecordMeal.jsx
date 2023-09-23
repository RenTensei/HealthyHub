import { nanoid } from 'nanoid';

import RenderSvg from '@/components/RenderSvg';
import styles from './ModalRecordMeal.module.scss';
import { useContext, useState } from 'react';
import { MealContext } from '@/context/MealContext';
import RecordMealInput from './RecordMealInput/RecordMealInput';
import { useDispatch } from 'react-redux';
import { postMyFoodIntake } from '@/store/features/foodIntake/thunks';

const ModalRecordMeal = ({ hide }) => {
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

  const { typeOfMeal } = useContext(MealContext);
  let imageSrc = '';
  switch (typeOfMeal.toLowerCase()) {
    case 'breakfast':
      imageSrc = 'breakfast';
      break;
    case 'lunch':
      imageSrc = 'lunch';
      break;
    case 'dinner':
      imageSrc = 'dinner';
      break;
    case 'snack':
      // eslint-disable-next-line no-unused-vars
      imageSrc = 'snack';
      break;
    default:
      null;
  }

  const onConfirmHandler = () => {
    const stateObject = {
      mealName,
      mealType: typeOfMeal,
      carbonohidrates: Number(carbonohidrates),
      protein: Number(protein),
      fat: Number(fat),
      calories: Number(calories),
    };
    console.log(stateObject);
    dispatch(postMyFoodIntake(stateObject));
  };
  return (
    <div className={styles.modal_container}>
      <div className={styles.content_container}>
        <h2 className={styles.title}>Record your meal</h2>
        <div className={styles.meal_container}>
          <RenderSvg imageSrc={imageSrc} />

          <h3 className={styles.subtitle}>{typeOfMeal}</h3>
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
        <div className={styles.button_container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4 8H12"
              stroke="#E3FFA8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 12V4"
              stroke="#E3FFA8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <button className={styles.button_add} onClick={addCustomComponent}>
            Add more
          </button>
        </div>
      </div>
      <div className={styles.buttons_container}>
        <button onClick={hide} className={styles.button_cancel}>
          Cancel
        </button>
        <button className={styles.button_confirm} onClick={onConfirmHandler}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ModalRecordMeal;

import { useContext } from 'react';
import styles from './DiaryBlock.module.scss';
import { MealContext } from '@/context/MealContext';
import { useModalContext } from '@/context/ModalContext';
// import PropTypes from 'prop-types';

const DiaryBlock = ({
  // openModal,
  intakeInfo: { mealType, carbonohidrates, protein, fat },
  srcSet,
}) => {
  const { setTypeOfMeal } = useContext(MealContext);

  const { openModal } = useModalContext();

  return (
    <div className={styles.ContainerDiary}>
      <div className={styles.title}>
        <img
          className={styles.imgTitle}
          src={srcSet[0]}
          srcSet={`${srcSet[0]} 1x, ${srcSet[1]} 2x`}
          alt={mealType}
        />
        <p className={styles.titleName}>{mealType}</p>
      </div>
      {!carbonohidrates && !protein && !fat ? (
        <div onClick={() => setTypeOfMeal(mealType)}>
          <button
            className={styles.button}
            onClick={() => openModal('ModalRecordMeal', mealType)}
          >
            + Record your meal
          </button>
        </div>
      ) : (
        <div className={styles.Calorie}>
          <p className={styles.itetemsCalories}>
            carbonohidrates:{' '}
            <span className={styles.totalCalorie}>{carbonohidrates}</span>
          </p>
          <p className={styles.itetemsCalories}>
            protein: <span className={styles.totalCalorie}>{protein}</span>
          </p>
          <p className={styles.itetemsCalories}>
            fat: <span className={styles.totalCalorie}>{fat}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default DiaryBlock;

// DiaryBlock.propTypes = {
//   name: PropTypes.string,
//   srcImg: PropTypes.string,
//   alt: PropTypes.string,
//   buttonName: PropTypes.string,
//   carbonohidrates: PropTypes.string,
//   protein: PropTypes.string,
//   fat: PropTypes.string,
//   srcSet: PropTypes.string,
// };

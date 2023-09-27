import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Diary.module.scss';
import DiaryBlock from '../DiaryBlock';

import { selectNutrientSums } from '@/store/features/foodIntake/selectors';
import { mealTypeSrcSets } from '@/utils/mealTypeSrcSets';

const Diary = () => {
  const foodIntakeNutrientsTotal = useSelector(selectNutrientSums);

  return (
    <section className={styles.sectionDiary}>
      <div className={styles.containerTitle}>
        <h2 className={styles.titleDiary}>Diary</h2>
        <Link className={styles.SeeMore} to={'/diary'}>
          See more
        </Link>
      </div>

      {foodIntakeNutrientsTotal.map(item => (
        <DiaryBlock
          key={item.mealType}
          intakeInfo={item}
          srcSet={mealTypeSrcSets[item.mealType]}
        />
      ))}
    </section>
  );
};

export default Diary;

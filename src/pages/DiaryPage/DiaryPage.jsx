import { Link, useLocation } from 'react-router-dom';
import DiaryBlock from './ components/DiaryBlock';
import styles from './DiaryPage.module.scss';
import { useSelector } from 'react-redux';
import { selectNutrientSums } from '@/store/features/foodIntake/selectors';
import { ReactComponent as ArrowRight } from '@/assets/svg/arrow-right.svg';

import breakfastSrc1x from './images/Breakfast.png';
import breakfastSrc2x from './images/Breakfast@2x.png';

import lunchSrc1x from './images/Lunch.png';
import lunchSrc2x from './images/Lunch@2x.png';

import dinnerSrc1x from './images/Dinner.png';
import dinnerSrc2x from './images/Dinner@2x.png';

import snackSrc1x from './images/Snack.png';
import snackSrc2x from './images/Snack@2x.png';

const mealTypeSrcSets = {
  Breakfast: [breakfastSrc1x, breakfastSrc2x],
  Lunch: [lunchSrc1x, lunchSrc2x],
  Dinner: [dinnerSrc1x, dinnerSrc2x],
  Snack: [snackSrc1x, snackSrc2x],
};

const DiaryPage = () => {
  const location = useLocation();
  const FoodIntakeNutrientsTotal = useSelector(selectNutrientSums);
  console.log(FoodIntakeNutrientsTotal);

  return (
    <section className={styles.sectionDiary}>
      <div className={styles.containerDiary}>
        <Link state={{ from: location }} to={'/'} className={styles.BeckHome}>
          <ArrowRight className={styles.arrowBack} />
          Diary
        </Link>
        <div className={styles.containerBloks}>
          {FoodIntakeNutrientsTotal.map(item => (
            <DiaryBlock
              product={'555'}
              typeName={item.mealType}
              key={item.mealType}
              data={FoodIntakeNutrientsTotal}
              title={item.mealType}
              srcSet={mealTypeSrcSets[item.mealType]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default DiaryPage;

{
  /* <DiaryBlock
        className={styles.containerBloks_1}
          img="/Breakfast.png"
          srcSet="/Breakfast.png, /Breakfast@2x.png"
          title={'Breakfast'}
          product={'Pasta'}
        />
        <DiaryBlock className={styles.containerBloks_2}  img="/Lunch.png" srcSet="/Lunch.png, /Lunch@2x.png" title={'Lunch'}/>
        <DiaryBlock className={styles.containerBloks_3} img="/Dinner.png" srcSet="/Dinner.png, /Dinner@2x.png" title={'Dinner'}/>
        <DiaryBlock className={styles.containerBloks_4} img="/Snack.png" srcSet="/Snack.png, /Snack@2x.png" title={'Snack'}/> */
}

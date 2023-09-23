import { useNavigate } from 'react-router-dom';
import DiaryBlock from './ components/DiaryBlock';
import styles from './DiaryPage.module.scss';
import { useSelector } from 'react-redux';
import {
  selectFoodIntakeByCategory,
  selectNutrientSums,
} from '@/store/features/foodIntake/selectors';
import { ReactComponent as ArrowRight } from '@/assets/svg/arrow-right.svg';
import { mealTypeSrcSets } from '@/utils/mealTypeSrcSets';
import { ROUTES } from '@/constants/routes';

const DiaryPage = () => {
  const navigate = useNavigate();

  const FoodIntakeNutrientsTotal = useSelector(selectNutrientSums);

  const foodIntakeByCategory = useSelector(selectFoodIntakeByCategory);

  console.log(foodIntakeByCategory);

  return (
    <section className={styles.sectionDiary}>
      <div className={styles.containerDiary}>
        <a
          onClick={() => navigate(ROUTES.HomePage)}
          className={styles.BeckHome}
        >
          <ArrowRight width={24} height={24} />
          Diary
        </a>
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

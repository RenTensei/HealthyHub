import { Link } from 'react-router-dom';
import DiaryBlock from './ components/DiaryBlock';
import styles from './DiaryPage.module.scss';
import { useSelector } from 'react-redux';
import { selectNutrientSums } from '@/store/features/foodIntake/selectors';
import { ReactComponent as ArrowRight } from '@/assets/svg/arrow-right.svg';
const DiaryPage = () => {
  const FoodIntakeNutrientsTotal = useSelector(selectNutrientSums);

  const mealTypeSrcSets = {
    Breakfast: 'public/Breakfast.png 1x, public/Breakfast@2x.png 2x',
    Lunch: 'public/Lunch.png 1x, public/Lunch@2x.png 2x',
    Dinner: 'public/Dinner.png 1x, public/Dinner@2x.png 2x ',
    Snack: 'public/Snack.png 1x, public/Snack@2x.png 2x',
  };


  return (
    <section className={styles.sectionDiary}>
      <div className={styles.containerDiary}>
        <Link to={'/'} className={styles.BeckHome}>
          <ArrowRight
            className={styles.arrowBack}
          />
          Diary
        </Link>
        <div className={styles.containerBloks}>
          {FoodIntakeNutrientsTotal.map(item => (
            <DiaryBlock
              product={'555'}
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

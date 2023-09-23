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
  console.log(FoodIntakeNutrientsTotal);
  

   const breakfast = [
    //  {
    //    _id: '650744a45349ba95e795e4eb',
    //    mealName: 'toast',
    //    mealType: 'Breakfast',
    //    carbonohidrates: 45,
    //    protein: 10,
    //    fat: 110,
    //    calories: 460,
    //    consumer: '6506e67b65a5957c6d9cbd33',
    //    createdAt: '2023-09-17T18:25:40.001Z',
    //    updatedAt: '2023-09-17T18:25:40.001Z',
    //  },
    //  {
    //    _id: '650744a45349ba95e795e4eb',
    //    mealName: 'toast',
    //    mealType: 'Breakfast',
    //    carbonohidrates: 45,
    //    protein: 10,
    //    fat: 110,
    //    calories: 460,
    //    consumer: '6506e67b65a5957c6d9cbd33',
    //    createdAt: '2023-09-17T18:25:40.001Z',
    //    updatedAt: '2023-09-17T18:25:40.001Z',
    //  },
   ];
   const dinner = [
    //  {
    //    _id: '650744a45349ba95e795e4eb',
    //    mealName: 'toast',
    //    mealType: 'Breakfast',
    //    carbonohidrates: 45,
    //    protein: 10,
    //    fat: 110,
    //    calories: 460,
    //    consumer: '6506e67b65a5957c6d9cbd33',
    //    createdAt: '2023-09-17T18:25:40.001Z',
    //    updatedAt: '2023-09-17T18:25:40.001Z',
    //  },
   ];
   const lunch = [
     {
       _id: '650744a45349ba95e795e4eb',
       mealName: 'toast',
       mealType: 'Breakfast',
       carbonohidrates: 45,
       protein: 10,
       fat: 110,
       calories: 460,
       consumer: '6506e67b65a5957c6d9cbd33',
       createdAt: '2023-09-17T18:25:40.001Z',
       updatedAt: '2023-09-17T18:25:40.001Z',
     },
   ];
   const snack = [
     {
       _id: '650744a45349ba95e795e4eb',
       mealName: 'toast',
       mealType: 'Breakfast',
       carbonohidrates: 45,
       protein: 10,
       fat: 110,
       calories: 460,
       consumer: '6506e67b65a5957c6d9cbd33',
       createdAt: '2023-09-17T18:25:40.001Z',
       updatedAt: '2023-09-17T18:25:40.001Z',
     },
   ];

   const mealTypes = [
     { type: 'Breakfast', data: breakfast },
     { type: 'Dinner', data: dinner },
     { type: 'Lunch', data: lunch },
     { type: 'Snack', data: snack },
   ];

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
          {mealTypes.map(({ type, data }) => (
            <DiaryBlock
              mealType={data}
              typeName={type}
              key={type}
              data={mealTypes}
              title={type}
              srcSet={mealTypeSrcSets[type]}
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

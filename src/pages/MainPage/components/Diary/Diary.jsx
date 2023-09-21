import { Link } from 'react-router-dom';
import DiaryBlock from '../DiaryBlock';
import styles from './Diary.module.scss';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { getMyFoodIntake } from '@/store/features/foodIntake/thunks';
import { selectNutrientSums } from '@/store/features/foodIntake/selectors';

const Diary = ({ openModal }) => {
  const foodIntakeNutrientsTotal = useSelector(selectNutrientSums);

  const mealTypeSrcSets = {
    Breakfast: 'public/Breakfast.png 1x, public/Breakfast@2x.png 2x',
    Lunch: 'public/Lunch.png 1x, public/Lunch@2x.png 2x',
    Dinner: 'public/Dinner.png 1x, public/Dinner@2x.png 2x ',
    Snack: 'public/Snack.png 1x, public/Snack@2x.png 2x',
  };

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
          openModal={openModal}
        />
      ))}

      {/* <DiaryBlock
        srcImg="/Breakfast.png"
        srcSet="/Breakfast.png, /Breakfast@2x.png"
        alt="Breakfast"
        name="Breakfast"
        buttonName="+ Record your meal"
        Carbonohidrates="22"
        Protein="22"
        Fat="22"
      />
      <DiaryBlock
        srcImg="/Lunch.png"
        srcSet="/Lunch.png, /Lunch@2x.png"
        alt="Lunch"
        name="Lunch"
        buttonName="+ Record your meal"
        Carbonohidrates=""
        Protein=""
        Fat=""
      />
      <DiaryBlock
        srcImg="/Dinner.png"
        srcSet="/Dinner.png, /Dinner@2x.png"
        alt="Dinner"
        name="Dinner"
        buttonName="+ Record your meal"
        Carbonohidrates=""
        Protein=""
        Fat=""
      />
      <DiaryBlock
        srcImg="/Snack.png"
        srcSet="/Snack.png, /Snack@2x.png"
        alt="Snack"
        name="Snack"
        buttonName="+ Record your meal"
        Carbonohidrates=""
        Protein=""
        Fat=""
      /> */}
    </section>
  );
};

export default Diary;

import { Link } from 'react-router-dom';
import DiaryBlock from '../DiaryBlock';
import styles from './Diary.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMyFoodIntake } from '@/store/features/foodIntake/thunks';
import { selectNutrientSums } from '@/store/features/foodIntake/selectors';

const Diary = () => {
  const dispatch = useDispatch();

  const foodIntakeNutrientSums = useSelector(selectNutrientSums);

  console.log(foodIntakeNutrientSums);

  useEffect(() => {
    // dispatch(getMyFoodIntake());
  }, [dispatch]);

  return (
    <section className={styles.sectionDiary}>
      <div className={styles.containerTitle}>
        <h2 className={styles.titleDiary}>Diary</h2>
        <Link className={styles.SeeMore} to={'/diary'}>
          See more
        </Link>
      </div>
      <DiaryBlock
        srcImg="/Breakfast.png"
        srcSet="/Breakfast.png, /Breakfast@2x.png"
        alt="Breakfast"
        name="Breakfast"
        buttonName="+ Record your meal"
        Carbonohidrates="55"
        Protein="55"
        Fat="55"
      >
        {}
      </DiaryBlock>
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
      />
    </section>
  );
};

export default Diary;

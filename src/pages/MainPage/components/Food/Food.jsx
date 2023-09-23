import { useSelector } from 'react-redux';
import BigDoughnutChart from '../DoughnutChart/BigDoughnutChart';
import SmallDoughnutChart from '../DoughnutChart/SmallDoughnutChart';
import styles from './Food.module.scss';
import { selectFoodStatistics } from '@/store/features/foodIntake/selectors';

const content = ['Carbonohidrates', 'Protein', 'Fat'];

const Food = () => {
  const foodStatistics = useSelector(selectFoodStatistics);
  // console.log(foodStatistics);

  return (
    <div className={styles.food_wrapper}>
      <h3 className={styles.food_title}>Food</h3>
      <div className={styles.food_container}>
        <BigDoughnutChart calories={foodStatistics.Calories.fact} />
        <div className={styles.food_subcontainer}>
          <SmallDoughnutChart
            nutritionValue={foodStatistics.Carbonohidrates.fact}
            arcColor={'#FFC4F7'}
            content={content[0]}
            goal={foodStatistics.Carbonohidrates.goal}
          />
          <SmallDoughnutChart
            nutritionValue={foodStatistics.Protein.fact}
            arcColor={'#FFF3B7'}
            content={content[1]}
            goal={foodStatistics.Protein.goal}
          />
          <SmallDoughnutChart
            nutritionValue={foodStatistics.Fat.fact}
            arcColor={'#B6B6B6'}
            content={content[2]}
            goal={foodStatistics.Fat.goal}
          />
        </div>
      </div>
    </div>
  );
};

export default Food;

import { useSelector } from 'react-redux';
import BigDoughnutChart from '../DoughnutChart/BigDoughnutChart';
import SmallDoughnutChart from '../DoughnutChart/SmallDoughnutChart';
import styles from './Food.module.scss';
import { selectFoodStatistics } from '@/store/features/foodIntake/selectors';
import { selectAppStatus } from '@/store/features/auth/selectors';
import { APP_STATUS } from '@/constants/appStatus';

const content = ['Carbonohidrates', 'Protein', 'Fat'];

const Food = () => {
  const { Calories, Carbonohidrates, Protein, Fat } =
    useSelector(selectFoodStatistics);

  const appStatus = useSelector(selectAppStatus);
  // console.log(appStatus);
  const shouldRender = appStatus === APP_STATUS.idle;

  return (
    <div className={styles.food_wrapper}>
      <h3 className={styles.food_title}>Food</h3>
      <div className={styles.food_container}>
        {shouldRender && (
          <BigDoughnutChart calories={Calories.fact} goal={Calories.goal} />
        )}
        <div className={styles.food_subcontainer}>
          {shouldRender && (
            <>
              <SmallDoughnutChart
                nutritionValue={Carbonohidrates.fact}
                arcColor={'#FFC4F7'}
                content={content[0]}
                goal={Carbonohidrates.goal}
              />
              <SmallDoughnutChart
                nutritionValue={Protein.fact}
                arcColor={'#FFF3B7'}
                content={content[1]}
                goal={Protein.goal}
              />
              <SmallDoughnutChart
                nutritionValue={Fat.fact}
                arcColor={'#B6B6B6'}
                content={content[2]}
                goal={Fat.goal}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Food;

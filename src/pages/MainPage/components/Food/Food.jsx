import BigDoughnutChart from '../DoughnutChart/BigDoughnutChart';
import SmallDoughnutChart from '../DoughnutChart/SmallDoughnutChart';
import styles from './Food.module.scss';
const content = ['Carbonohidrates', 'Protein', 'Fat'];

const Food = () => {
  return (
    <div className={styles.food_wrapper}>
      <h2 className={styles.food_title}>Food</h2>
      <div className={styles.food_container}>
        <BigDoughnutChart calories={2200} />
        <div className={styles.food_subcontainer}>
          <SmallDoughnutChart
            nutritionValue={21}
            arcColor={'#FFC4F7'}
            content={content[0]}
            goal={231}
          />
          <SmallDoughnutChart
            nutritionValue={80}
            arcColor={'#FFF3B7'}
            content={content[1]}
            goal={123}
          />
          <SmallDoughnutChart
            nutritionValue={80}
            arcColor={'#B6B6B6'}
            content={content[2]}
            goal={83}
          />
        </div>
      </div>
    </div>
  );
};

export default Food;

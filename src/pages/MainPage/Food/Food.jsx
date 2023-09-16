import BigDoughnutChart from '../DoughnutChart/BigDoughnutChart/BigDoughnutChart';
import SmallDoughnutChart from '../DoughnutChart/SmallDoughnutChart/SmallDoughnutChart';
// import styles from './Food.module.scss';
const content = ['Carbonohidrates', 'Protein', 'Fat'];

const Food = () => {
  return (
    <div>
      <BigDoughnutChart calories={1700} arcColor={'#ffffff'} />
      <SmallDoughnutChart
        nutritionValue={231}
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
        goal={183}
      />
    </div>
  );
};

export default Food;

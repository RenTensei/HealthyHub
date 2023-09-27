import { Link } from 'react-router-dom';

import styles from './RecommendedFoodMain.module.scss';
import FoodList from './components/FoodListMain';

import { ReactComponent as Logos } from '@/assets/svg/arrow-right-liqht.svg';

const RecomendedFoodMain = () => {
  return (
    <div className={styles.main__container__recfood}>
      <h2 className={styles.title}>Recommended food</h2>
      <FoodList />
      <Link className={styles.link__recfood} to={'/recommended-food'}>
        <span className={styles.see__more}>See more</span>
        <span className={styles.click__here}>Click here</span>
        <Logos className={styles.seemore__arrow} />
      </Link>
    </div>
  );
};

export default RecomendedFoodMain;

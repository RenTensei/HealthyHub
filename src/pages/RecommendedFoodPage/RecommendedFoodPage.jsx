import styles from './RecommendedFoodPage.module.scss';
import imageMobile1 from '@/assets/images/recfood-mobile1x.jpg';
import imageMobile2 from '@/assets/images/recfood-mobile2x.jpg';
import imageTab1 from '@/assets/images/recfood-tab1x.jpg';
import imageTab2 from '@/assets/images/recfood-tab2x.jpg';
import imageDesktop1 from '@/assets/images/recfood-desktop1x.jpg';
import imageTabDesktop2 from '@/assets/images/recfood-desktop2x.jpg';
import FoodList from './components/FoodListPage';

export default function RecommendedFoodPage() {
  return (
    <div className={styles.main__container__page}>
      <h2 className={styles.title__page}>Recommended food</h2>
      <div className={styles.cont__image__foodlist__page}>
        <picture className={styles.picture__page}>
          <source
            media="(min-width: 1440px)"
            srcSet={`${imageDesktop1} 1x, ${imageTabDesktop2} 2x`}
            width={536}
            height={560}
          />
          <source
            media="(min-width: 833px)"
            srcSet={`${imageTab1} 1x, ${imageTab2} 2x`}
            width={380}
            height={396}
          />
          <img
            srcSet={`${imageMobile1} 1x, ${imageMobile2} 2x`}
            width={300}
            height={312}
            className={styles.image__page}
          />
        </picture>
        <FoodList />
      </div>
    </div>
  );
}

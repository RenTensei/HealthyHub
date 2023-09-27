import ImageLaptop1x from '../../assets/images/Sport_and_fitness-tracker_laptop.jpg';
import ImageLaptop2x from '../../assets/images/Sport_and_fitness_tracker@2x_laptop.jpg';
import ImageTablet1x from '../../assets/images/Sport_and_fitness_tracker_tablet.jpg';
import ImageTablet2x from '../../assets/images/Sport_and_fitness_tracker@2x_tablet.jpg';
import ImageMobile1x from '../../assets/images/Sport_and_fitness_tracker-mobile.jpg';
import ImageMobile2x from '../../assets/images/Sport_and_fitness_tracker@2x_mobile.jpg';
import styles from './RenderImagesAuthPages.module.scss';

const RenderImagesAuthPages = () => {
  return (
    <picture style={{ display: 'inline-block' }}>
      <source
        className={styles.Img}
        media="(max-width: 833px)"
        srcSet={`${ImageMobile1x} 1x, ${ImageMobile2x} 2x`}
      />
      <source
        className={styles.Img}
        media="(max-width: 1439px)"
        srcSet={`${ImageTablet1x} 1x, ${ImageTablet2x} 2x`}
      />
      <img
        className={styles.Img}
        loading="lazy"
        srcSet={`${ImageLaptop1x} 1x, ${ImageLaptop2x} 2x`}
        src="Sport_and_fitness_tracker-mobile.png"
        alt="Sport and fitness tracker"
      />
    </picture>
  );
};

export default RenderImagesAuthPages;

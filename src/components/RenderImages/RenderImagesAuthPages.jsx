import styles from './RenderImagesAuthPages.module.scss';
import ImageLaptop1x from '../../assets/images/Sport_and_fitness-tracker_laptop.jpg';
import ImageMobile1x from '../../assets/images/Sport_and_fitness_tracker-mobile.jpg';
import ImageLaptop2x from '../../assets/images/Sport_and_fitness_tracker@2x_laptop.jpg';
import ImageMobile2x from '../../assets/images/Sport_and_fitness_tracker@2x_mobile.jpg';
import ImageTablet2x from '../../assets/images/Sport_and_fitness_tracker@2x_tablet.jpg';
import ImageTablet1x from '../../assets/images/Sport_and_fitness_tracker_tablet.jpg';

const RenderImagesAuthPages = () => {
  return (
    <picture style={{ display: 'inline-block' }}>
      <source
        className={styles.Img}
        media="(max-width: 833px)"
        srcSet={`${ImageMobile1x} 1x, ${ImageMobile2x} 2x`}
        width={380}
        height={376}
      />
      <source
        className={styles.Img}
        media="(max-width: 1439px)"
        srcSet={`${ImageTablet1x} 1x, ${ImageTablet2x} 2x`}
        width={592}
        height={588}
      />
      <img
        className={styles.Img}
        srcSet={`${ImageLaptop1x} 1x, ${ImageLaptop2x} 2x`}
        src="Sport_and_fitness_tracker-mobile.jpg"
        alt="Sport and fitness tracker"
        width={300}
        height={296}
      />
    </picture>
  );
};

export default RenderImagesAuthPages;

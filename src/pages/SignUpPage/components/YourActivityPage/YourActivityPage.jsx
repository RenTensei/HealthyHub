import ImageLaptop1x from './Images/Workout_fashion@1x_desktop.png';
import ImageLaptop2x from './Images/Workout_fashion@2x_desktop.png';
import ImageTablet1x from './Images/Workout_fashion@1x_tablet.png';
import ImageTablet2x from './Images/Workout_fashion@2x_tablet.png';
import ImageMobile1x from './Images/Workout_fashion@1x_mobile.png';
import ImageMobile2x from './Images/Workout_fashion@2x_mobile.png';
import styles from './YourActivityPage.module.scss';

const YourActivityPage = () => {
  return (
    <div className={styles.Container}>
      <picture className={styles.Picture}>
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
      <div className={styles.Text_container}>
        <h1 className={styles.Title}>Your Activity</h1>
        <p className={styles.Text}>
          To correctly calculate calorie and water intake
        </p>
        <form autoComplete="off" className={styles.Form}>
          <div className={styles.Form_field}>
            <input
              type="radio"
              name="avtivity"
              value="1.2"
              placeholder="E-mail"
              className={styles.Input}
            />
            <label className={styles.Label} for="1.2">
              1.2 - if you do not have physical activity and sedentary work
            </label>
          </div>
          <div className={styles.Form_field}>
            <input
              type="radio"
              name="avtivity"
              value="1.375"
              placeholder="Password"
              className={styles.Input}
            />
            <label className={styles.Label} for="1.375">
              1,375 - if you do short runs or light gymnastics 1-3 times a week
            </label>
          </div>

          <div className={styles.Form_field}>
            <input
              type="radio"
              name="avtivity"
              value="1.55"
              placeholder="Password"
              className={styles.Input}
            />
            <label className={styles.Label} for="1.55">
              1.55 - if you play sports with average loads 3-5 times a week
            </label>
          </div>

          <div className={styles.Form_field}>
            <input
              type="radio"
              name="avtivity"
              value="1.725"
              placeholder="Password"
              className={styles.Input}
            />
            <label className={styles.Label} for="1.725">
              1,725 ​​- if you train fully 6-7 times a week
            </label>
          </div>

          <div className={styles.Form_field}>
            <input
              type="radio"
              name="avtivity"
              value="1.9"
              placeholder="Password"
              className={styles.Input}
            />
            <label className={styles.Label} for="1.9">
              1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </label>
          </div>

          <button type="submit" className={styles.Button}>
            Next
          </button>
          <button type="submit" className={styles.Button_back}>
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default YourActivityPage;

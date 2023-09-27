import ImageLaptop1x from './Images/Workout_fashion@1x_desktop.png';
import ImageLaptop2x from './Images/Workout_fashion@2x_desktop.png';
import ImageTablet1x from './Images/Workout_fashion@1x_tablet.png';
import ImageTablet2x from './Images/Workout_fashion@2x_tablet.png';
import ImageMobile1x from './Images/Workout_fashion@1x_mobile.png';
import ImageMobile2x from './Images/Workout_fashion@2x_mobile.png';
import styles from './YourActivityPage.module.scss';
import { useSignUpContext } from '@/hooks/useSignUpContext';
import { useDispatch } from 'react-redux';
import { signUp } from '@/store/features/auth/thunks';
// import { useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';

const YourActivityPage = () => {
  const { prevStage, signUpData } = useSignUpContext();

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSubmit = async values => {
    const res = await dispatch(
      signUp({
        ...signUpData,
        physicalActivityRatio: Number(values.physicalActivityRatio),
      })
    );

    if (res?.meta.requestStatus === 'fulfilled') {
      toast.success('Account created successfully!');

      // navigate('/main');
    }
  };

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
        <Formik
          initialValues={{
            physicalActivityRatio:
              String(signUpData.physicalActivityRatio) || '',
          }}
          onSubmit={handleSubmit}
        >
          <Form className={styles.Form}>
            <div className={styles.Form_field}>
              <label className={styles.Label}>
                <Field
                  type="radio"
                  name="physicalActivityRatio"
                  value="1.2"
                  className={styles.Input}
                  required
                />
                <span>
                  1.2 - if you do not have physical activity and sedentary work
                </span>
              </label>
            </div>
            <div className={styles.Form_field}>
              <label className={styles.Label}>
                <Field
                  type="radio"
                  name="physicalActivityRatio"
                  value="1.375"
                  className={styles.Input}
                  required
                />
                <span>
                  1,375 - if you do short runs or light gymnastics 1-3 times a
                  week
                </span>
              </label>
            </div>

            <div className={styles.Form_field}>
              <label className={styles.Label}>
                <Field
                  type="radio"
                  name="physicalActivityRatio"
                  value="1.55"
                  className={styles.Input}
                  required
                />
                <span>
                  1.55 - if you play sports with average loads 3-5 times a week
                </span>
              </label>
            </div>

            <div className={styles.Form_field}>
              <label className={styles.Label}>
                <Field
                  type="radio"
                  name="physicalActivityRatio"
                  value="1.725"
                  className={styles.Input}
                  required
                />
                <span>1,725 if you train fully 6-7 times a week</span>
              </label>
            </div>

            <div className={styles.Form_field}>
              <label className={styles.Label}>
                <Field
                  type="radio"
                  name="physicalActivityRatio"
                  value="1.9"
                  className={styles.Input}
                  required
                />
                <span>
                  1.9 - if your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program
                </span>
              </label>
            </div>

            <button type="submit" className={styles.Button}>
              Sign Up
            </button>
            <button
              type="button"
              onClick={prevStage}
              className={styles.Button_back}
            >
              Back
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default YourActivityPage;

import { Formik, Form, Field } from 'formik';

import styles from './yourGoal.module.scss';

import { useSignUpContext } from '@/hooks/useSignUpContext';
import image1 from '@/pages/SignUpPage/images/YourGoals-diskt.png';
import image2 from '@/pages/SignUpPage/images/YourGoals-diskt@2x.png';
import image5 from '@/pages/SignUpPage/images/YourGoals-mob.png';
import image6 from '@/pages/SignUpPage/images/YourGoals-mob@2x.png';
import image3 from '@/pages/SignUpPage/images/YourGoals-tab.png';
import image4 from '@/pages/SignUpPage/images/YourGoals-tab@2x.png';

const YourGoal = () => {
  const { nextStage, signUpData, addSignUpData } = useSignUpContext();

  const initialValues = {
    goal: signUpData.goal || '',
  };

  const handleSubmit = (values, { resetForm }) => {
    addSignUpData(values);
    nextStage();

    resetForm();
  };

  return (
    <div className={styles.container_your_goal}>
      <div className={styles.container_picture}>
        <picture className={styles.picture}>
          <source
            media="(min-width: 1440px)"
            srcSet={`${image1} 1x, ${image2} 2x`}
            width={592}
            height={574}
          />
          <source
            media="(min-width: 833px)"
            srcSet={`${image3} 1x, ${image4} 2x`}
            width={380}
            height={368}
          />
          <img
            srcSet={`${image5} 1x, ${image6} 2x`}
            width={300}
            height={290}
            src={image5}
            alt="Your Goals"
          />
        </picture>
      </div>

      <div className={styles.container_form}>
        <h1 className={styles.title}>Your goal</h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={styles.form_checked}>
            <p className={styles.text}>
              Choose a goal so that we can help you effectively
            </p>
            <div id="my-radio-group" className={styles.container_label_list}>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={styles.container_label}
              >
                <label className={styles.list} htmlFor="loseFat">
                  <Field
                    id="loseFat"
                    className={styles.item}
                    type="radio"
                    name="goal"
                    value="Lose fat"
                    required
                  />
                  Lose Fat
                </label>
              </div>
              <div className={styles.container_label_ctnter}>
                <label className={styles.list} htmlFor="maintain">
                  <Field
                    id="maintain"
                    className={styles.item}
                    type="radio"
                    name="goal"
                    value="Maintain"
                    required
                  />
                  Maintain
                </label>
              </div>
              <div className={styles.container_label_end}>
                <label className={styles.list} htmlFor="gainMuscle">
                  <Field
                    id="gainMuscle"
                    className={styles.item}
                    type="radio"
                    name="goal"
                    value="Gain Muscle"
                    required
                  />
                  Gain Muscle
                </label>
              </div>
            </div>
            <button type="submit" className={styles.btn}>
              Next
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default YourGoal;

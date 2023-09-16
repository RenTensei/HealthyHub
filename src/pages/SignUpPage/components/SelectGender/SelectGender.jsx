import React from 'react';
import image1 from '@/pages/SignUpPage/images/SelectGender-disct.png';
import image2 from '@/pages/SignUpPage/images/SelectGender-diskt@2x.png';
import image3 from '@/pages/SignUpPage/images/SelectGender-tab.png';
import image4 from '@/pages/SignUpPage/images/SelectGender-tab@2x.png';
import image5 from '@/pages/SignUpPage/images/SelectGender-mob.png';
import image6 from '@/pages/SignUpPage/images/SelectGender-mob@2x.png';

import styles from './selectGender.module.scss';
import { Formik, Form, Field } from 'formik';

const SelectGender = () => {
  const handleSubmite = (values, actions) => {};

  return (
    <div className={styles.container_your_goal}>
      <div className={styles.container_picture}>
        <picture className={styles.picture}>
          <source
            media="(min-width: 1440px)"
            srcSet={`${image1} 1x, ${image2} 2x`}
            width={592}
            height={570}
          />
          <source
            media="(min-width: 833px)"
            srcSet={`${image3} 1x, ${image4} 2x`}
            width={380}
            height={366}
          />
          <img
            srcSet={`${image5} 1x, ${image6} 2x`}
            width={300}
            height={288}
            src={image5}
            alt="Select Gender"
          />
        </picture>
      </div>
      <div className={styles.container_form}>
        <h1 className={styles.title}>Select gender, Age</h1>
        <Formik onSubmit={handleSubmite}>
          <Form className={styles.form_checked}>
            <p className={styles.text}>
              Choose a goal so that we can help you effectively
            </p>
            <p className={styles.desc}>Gender</p>
            <div className={styles.container_label_list}>
              <div className={styles.container_label_item}>
                <div className={styles.container_label}>
                  <label className={styles.list}>
                    <Field
                      className={styles.item}
                      type="radio"
                      name="check"
                      value="Male"
                      onChange={() => {}}
                    />
                    Male
                  </label>
                </div>
                <div className={styles.container_label_center}>
                  <label className={styles.list}>
                    <Field
                      className={styles.item}
                      type="radio"
                      name="check"
                      value="Female"
                      onChange={() => {}}
                    />
                    Female
                  </label>
                </div>
              </div>
              <div className={styles.container_label_end}>
                <p className={styles.your_age}> Your age</p>
                <label className={styles}>
                  <Field
                    className={styles.item_input}
                    name="check"
                    value="Enter your age"
                    onChange={() => {}}
                  />
                </label>
              </div>
            </div>

            <button type="submit" className={styles.btn}>
              Next
            </button>
            <button type="submit" className={styles.btn_back}>
              Back
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SelectGender;

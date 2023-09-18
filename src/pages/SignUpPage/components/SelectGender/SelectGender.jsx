import { useState } from 'react';
import image1 from '@/pages/SignUpPage/images/SelectGender-disct.png';
import image2 from '@/pages/SignUpPage/images/SelectGender-diskt@2x.png';
import image3 from '@/pages/SignUpPage/images/SelectGender-tab.png';
import image4 from '@/pages/SignUpPage/images/SelectGender-tab@2x.png';
import image5 from '@/pages/SignUpPage/images/SelectGender-mob.png';
import image6 from '@/pages/SignUpPage/images/SelectGender-mob@2x.png';

import styles from './selectGender.module.scss';
import { Formik, Form, Field } from 'formik';
import { object, number, string } from 'yup';

let userSchema = object({
  topping: string().required(),
  age: number().required().positive().integer().max(100),
});

const initialValues = {
  topping: '',
  age: '',
};

const SelectGender = () => {

  const handleSubmite = (values, { resetForm }) => {
    (JSON.stringify(values, null, 2));
    console.log(values);
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
        <Formik
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={handleSubmite}
        >
          <Form className={styles.form_checked}>
            <p className={styles.text}>
              Choose a goal so that we can help you effectively
            </p>
            <p className={styles.desc}>Gender</p>
            <div  className={styles.container_label_list}>
              <div id="my-radio-group" className={styles.container_label_item}>
                <div role="group" aria-labelledby="my-radio-group" className={styles.container_label}>
                  <label 
                  className={styles.list}>
                    <Field
                      className={styles.item}
                      type="radio"
                      name="topping"
                      value="Male"
                    />
                    Male
                  </label>
                </div>
                <div className={styles.container_label_center}>
                  <label 
                  className={styles.list}>
                    <Field
                      className={styles.item}
                      type="radio"
                      name="topping"
                      value="Female"
                    />
                    Female
                  </label>
                </div>
              </div>
              <div className={styles.container_label_end}>
                <label className={styles.your_age}>
                  Your age
                  <Field
                    className={styles.item_input}
                    type="number"
                    name="age"
                    placeholder="Enter your age"
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

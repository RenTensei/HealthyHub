import styles from '../scss/Form.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchemaSignIn from '../Schemas/ValidationSchemaSignInForm';
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import { useState } from 'react';

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const [visible, setVisible] = useState(true);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaSignIn}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off" className={styles.Form}>
          <label htmlFor="email" className={styles.Label}></label>
          <div className={styles.Input_wrapper}>
            <Field
              type="email"
              name="email"
              placeholder="E-mail"
              className={`${styles.Input} ${errors.email && touched.email ? styles.Input__error : null
                }`}
            />
            <ErrorMessage
              className={`${styles.Message} ${styles.Message__error}`}
              name="email"
              component="div"
            />
          </div>

          <label htmlFor="password" className={styles.Label}></label>
          <div className={styles.Input_wrapper}>
            <Field
              id="password"
              type={visible ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className={`${styles.Input} ${errors.password && touched.password ? styles.Input__error : null

                // TODO change this line
                // add handler for success state
                // styles.Input__success
                }`}
            />
            {/* TODO Change errors handler */}
            <ErrorMessage
              className={`${styles.Message} ${styles.Message__error}`}
              name="password"
              component="div"
            />
            {
              errors.password && touched.password ? (
                <div
                  className={`${styles.Icon} ${styles.Icon__right} ${styles.Icon__error} ${styles.Icon__right_secondary}`}
                >
                  <CloseCircleOutlined />
                </div>
              ) : null
              //   (
              //   <div
              //     className={`${styles.Icon} ${styles.Icon__right} ${styles.Icon__success} ${styles.Icon__right_secondary}`}
              //   >
              //     <CheckCircleOutlined />
              //   </div>
              // )
            }
            <div
              className={`${styles.Icon} ${styles.Icon__right}`}
              onClick={() => setVisible(!visible)}
            >
              {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </div>
          </div>

          <button type="submit" className={styles.Button}>
            Sign in
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;

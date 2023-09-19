import styles from '../scss/Form.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import validationSchemaSignUp from '../Schemas/ValidationSchemaSignUpForm';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUpForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setTimeout(() => {
      setSuccess(true);
      resetForm();
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 1000);
    
  };

  const [visible, setVisible] = useState(true);
  const [success, setSuccess] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaSignUp}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off" className={styles.Form}>
          <label htmlFor="name" className={styles.Label}></label>
          <div className={styles.Input_wrapper}>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={`${styles.Input} ${
                errors.name && touched.name ? styles.Input__error : null
              }`}
            />
            <ErrorMessage
              className={`${styles.Message} ${styles.Message__error}`}
              name="name"
              component="div"
            />
          </div>

          <label htmlFor="email" className={styles.Label}></label>
          <div className={styles.Input_wrapper}>
            <Field
              type="email"
              name="email"
              placeholder="E-mail"
              className={`${styles.Input} ${
                errors.email && touched.email ? styles.Input__error : null
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
              className={`${styles.Input} ${
                errors.password && touched.password
                  ? styles.Input__error
                  : success
                  ? styles.Input__success
                  : null
              }`}
            />
            <ErrorMessage
              className={`${styles.Message} ${styles.Message__error}`}
              name="password"
              component="div"
            />
            {errors.password && touched.password ? (
              <div
                className={`${styles.Icon} 
                  ${styles.Icon__right} 
                  ${styles.Icon__error} 
                  ${styles.Icon__right_secondary}`}
              >
                <CloseCircleOutlined />
              </div>
            ) : success ? (
              <div
                className={`${styles.Icon} ${styles.Icon__right} ${styles.Icon__success} ${styles.Icon__right_secondary}`}
              >
                <CheckCircleOutlined />
              </div>
            ) : null}
            <div
              className={`${styles.Icon} ${styles.Icon__right}`}
              onClick={() => setVisible(!visible)}
            >
              {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </div>
          </div>
          <button type="submit" className={styles.Button}>
            Sign up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;

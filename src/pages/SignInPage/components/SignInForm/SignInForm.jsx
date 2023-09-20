import styles from '../../../../components/scss/Form.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchemaSignIn from '../../../../schemas/ValidationSchemaSignInForm';
import { ReactComponent as EyeOpenSvg } from '@/assets/svg/eye-open.svg';
import {
  ReactComponent as EyeCloseSvg } from '@/assets/svg/eye-close.svg';
import { ReactComponent as ErrorLogoSvg } from '@/assets/svg/error-logo.svg';
import { ReactComponent as SuccessLogoSvg } from '@/assets/svg/success-logo.svg';
import { useState } from 'react';

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
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
                <ErrorLogoSvg width={24} height={24} />
              </div>
            ) : success ? (
              <div
                className={`${styles.Icon} ${styles.Icon__right} ${styles.Icon__success} ${styles.Icon__right_secondary}`}
              >
                <SuccessLogoSvg width={24} height={24} />
              </div>
            ) : null}
            <div
              className={`${styles.Icon} ${styles.Icon__right}`}
              onClick={() => setVisible(!visible)}
            >
              {visible ? (
                <EyeOpenSvg width={24} height={24} />
              ) : (
                <EyeCloseSvg width={24} height={24} />
              )}
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

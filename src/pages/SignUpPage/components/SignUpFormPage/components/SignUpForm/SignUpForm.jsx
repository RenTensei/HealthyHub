import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as ErrorLogoSvg } from '@/assets/svg/error-logo.svg';
import { ReactComponent as EyeCloseSvg } from '@/assets/svg/eye-close.svg';
import { ReactComponent as EyeOpenSvg } from '@/assets/svg/eye-open.svg';
import { ReactComponent as SuccessLogoSvg } from '@/assets/svg/success-logo.svg';
import styles from '@/components/scss/Form.module.scss';
import { useSignUpContext } from '@/hooks/useSignUpContext';
import validationSchemaSignUp from '@/schemas/ValidationSchemaSignUpForm';
import { checkEmail } from '@/store/features/auth/thunks';

const SignUpForm = () => {
  const [visible, setVisible] = useState(false);
  const [inputState, setInputState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const { nextStage, addSignUpData, signUpData } = useSignUpContext();
  const initialValues = {
    name: signUpData.name || '',
    email: signUpData.email || '',
    password: signUpData.password || '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    const res = await dispatch(checkEmail(values.email));

    if (res?.meta.requestStatus === 'fulfilled') {
      addSignUpData(values);
      resetForm();
      nextStage();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaSignUp}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldTouched }) => (
        <Form autoComplete="off" className={styles.Form}>
          <label htmlFor="name" className={styles.Label}></label>
          <div className={styles.Input_wrapper}>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={`${styles.Input} ${
                errors.name && touched.name
                  ? styles.Input__error
                  : inputState.name && !errors.name
                  ? styles.Input__success
                  : null
              }`}
              onInput={e => {
                const value = e.target.value;
                setInputState(prevState => ({
                  ...prevState,
                  name: value,
                }));
                setFieldTouched('name', true); // Устанавливаем touched в true
              }}
            />
            <ErrorMessage
              className={`${styles.Message} ${styles.Message__error}`}
              name="name"
              component="div"
            />
            {errors.name && touched.name ? (
              <div
                className={`${styles.Icon} 
                  ${styles.Icon__right} 
                  ${styles.Icon__error} 
                  ${styles.Icon__right_secondary}`}
              >
                <ErrorLogoSvg width={24} height={24} />
              </div>
            ) : inputState.name && !errors.name ? (
              <div
                className={`${styles.Icon} ${styles.Icon__right} ${styles.Icon__success} ${styles.Icon__right_secondary}`}
              >
                <SuccessLogoSvg width={24} height={24} />
              </div>
            ) : null}
          </div>

          <label htmlFor="email" className={styles.Label}></label>
          <div className={styles.Input_wrapper}>
            <Field
              type="email"
              name="email"
              placeholder="E-mail"
              className={`${styles.Input} ${
                errors.email && touched.email
                  ? styles.Input__error
                  : inputState.email && !errors.email
                  ? styles.Input__success
                  : null
              }`}
              onInput={e => {
                const value = e.target.value;
                setInputState(prevState => ({
                  ...prevState,
                  email: value,
                }));
                setFieldTouched('email', true); // Устанавливаем touched в true
              }}
            />
            <ErrorMessage
              className={`${styles.Message} ${styles.Message__error}`}
              name="email"
              component="div"
            />
            {errors.email && touched.email ? (
              <div
                className={`${styles.Icon} 
                  ${styles.Icon__right} 
                  ${styles.Icon__error} 
                  ${styles.Icon__right_secondary}`}
              >
                <ErrorLogoSvg width={24} height={24} />
              </div>
            ) : inputState.email && !errors.email ? (
              <div
                className={`${styles.Icon} ${styles.Icon__right} ${styles.Icon__success} ${styles.Icon__right_secondary}`}
              >
                <SuccessLogoSvg width={24} height={24} />
              </div>
            ) : null}
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
                  : inputState.password && !errors.password
                  ? styles.Input__success
                  : null
              }`}
              onInput={e => {
                const value = e.target.value;
                setInputState(prevState => ({
                  ...prevState,
                  password: value,
                }));
                setFieldTouched('password', true); // Устанавливаем touched в true
              }}
            />
            <ErrorMessage
              className={`${styles.Message} ${styles.Message__error}`}
              name="password"
              component="div"
            />

            {errors.password && touched.password ? (
              <div
                className={`${styles.Message} ${styles.Message__error}`}
              ></div>
            ) : inputState.password && !errors.password ? (
              <div className={`${styles.Message} ${styles.Message__success}`}>
                Password is secure
              </div>
            ) : null}

            {errors.password && touched.password ? (
              <div
                className={`${styles.Icon} 
                  ${styles.Icon__right} 
                  ${styles.Icon__error} 
                  ${styles.Icon__right_secondary}`}
              >
                <ErrorLogoSvg width={24} height={24} />
              </div>
            ) : inputState.password && !errors.password ? (
              <div
                className={`${styles.Icon} ${styles.Icon__right} ${styles.Icon__success} ${styles.Icon__right_secondary} `}
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
            Sign up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;

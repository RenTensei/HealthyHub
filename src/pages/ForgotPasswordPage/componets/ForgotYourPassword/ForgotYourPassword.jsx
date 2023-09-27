import validationSchemaForgotPassword from '../../../../schemas/ValidationSchemaForgotPassword';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '../../../../components/scss/Form.module.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '@/store/features/auth/thunks';
import { ReactComponent as ErrorLogoSvg } from '@/assets/svg/error-logo.svg';
import { ReactComponent as SuccessLogoSvg } from '@/assets/svg/success-logo.svg';
import { useState } from 'react';

const initialValues = {
  email: '',
};

const ForgotYourPasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputState, setInputState] = useState({
    email: '',
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(resetPassword(values));
    navigate('/signin');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaForgotPassword}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldTouched }) => (
        <Form autoComplete="off" className={styles.Form}>
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

          <button type="submit" className={styles.Button}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotYourPasswordForm;

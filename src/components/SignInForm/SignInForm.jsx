import styles from '../scss/Form.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchemaSignIn from '../Schemas/ValidationSchemaSignInForm';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
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
      <Form autoComplete="off" className={styles.Form}>
        <label htmlFor="email" className={styles.Label}></label>
        <div className={styles.Input_wrapper}>
          <Field
            type="email"
            name="email"
            placeholder="E-mail"
            className={styles.Input}
          />
          <ErrorMessage name="email" />
        </div>

        <label htmlFor="password" className={styles.Label}></label>
        <div className={styles.Input_wrapper}>
          <Field
            id="password"
            type={visible ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            className={styles.Input}
          />
          <ErrorMessage name="password" />
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
    </Formik>
  );
};

export default SignInForm;

import validationSchemaForgotPassword from '../Schemas/ValidationSchemaForgotPassword';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '../scss/Form.module.scss';

const initialValues = {
  email: '',
};

const ForgotYourPasswordForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaForgotPassword}
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

        <button type="submit" className={styles.Button}>
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default ForgotYourPasswordForm;

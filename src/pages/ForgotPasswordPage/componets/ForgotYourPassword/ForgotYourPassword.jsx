import validationSchemaForgotPassword from '../../../../schemas/ValidationSchemaForgotPassword';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '../../../../components/scss/Form.module.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '@/store/features/auth/thunks';

const initialValues = {
  email: '',
}


const ForgotYourPasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
  await dispatch(resetPassword(values));
 navigate('/signin');

  
  }
  

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

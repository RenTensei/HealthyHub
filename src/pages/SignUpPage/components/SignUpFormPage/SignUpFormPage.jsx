import RenderImagesAuthPages from '@/components/RenderImages/RenderImagesAuthPages';
import styles from '../../../../components/scss/AuthPageTextStyles.module.scss';
import SignUpForm from '@/pages/SignUpPage/components/SignUpFormPage/components/SignUpForm/SignUpForm';
import { Link } from 'react-router-dom';

const SignUpFormPage = () => {
  return (
    <div className={styles.Container}>
      <RenderImagesAuthPages />
      <div className={styles.Text_container}>
        <h1 className={styles.Title}>Sign up</h1>
        <p className={styles.Text}>You need to register to use the service</p>
        <SignUpForm />
        <div className={styles.Container_logn_in}>
          <p className={styles.Paragraph}>Do you already have an account?</p>
          <Link to={'/signin'} className={styles.Link}>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpFormPage;

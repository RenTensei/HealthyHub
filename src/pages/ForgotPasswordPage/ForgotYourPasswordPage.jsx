import ForgotYourPasswordForm from './componets/ForgotYourPassword/ForgotYourPassword';
import styles from '../../components/scss/AuthPageTextStyles.module.scss';
import RenderImagesAuthPages from '@/components/RenderImages/RenderImagesAuthPages';
import { Link } from 'react-router-dom';

const ForgotYourPasswordPage = () => {
  return (
    <div className={styles.Container}>
      <RenderImagesAuthPages />

      <div className={styles.Text_container}>
        <h1 className={styles.Title}>Forgot your password</h1>
        <p className={styles.Text}>
          We will send you an email with recovery instructions
        </p>
        <ForgotYourPasswordForm />
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

export default ForgotYourPasswordPage;

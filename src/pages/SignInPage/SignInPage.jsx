import { Link } from 'react-router-dom';

import SignInForm from './components/SignInForm';
import styles from '../../components/scss/AuthPageTextStyles.module.scss';

import RenderImagesAuthPages from '@/components/RenderImages';

const SignInPage = () => {
  return (
    <div className={styles.Container}>
      <RenderImagesAuthPages />
      <div className={styles.Text_container}>
        <h1 className={styles.Title}>Sign in</h1>
        <p className={styles.Text}>You need to login to use the service</p>
        <div className={styles.Form_container}>
          <SignInForm />
          <div className={styles.Text_about_password}>
            <Link to={'/forgotyourpassword'}>Forgot your password?</Link>
          </div>
        </div>

        <div className={styles.Container_logn_in}>
          <p className={styles.Paragraph}>If you don't have an account yet</p>
          <Link to={'/signup'} className={styles.Link}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

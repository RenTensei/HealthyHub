import RenderImagesAuthPages from '@/components/RenderImages';
import styles from '../../components/scss/AuthPageTextStyles.module.scss';

import SignInForm from './components/SignInForm';

const SignInPage = () => {
  return (
    <div className={styles.Container}>
      <RenderImagesAuthPages />
      <div className={styles.Text_container}>
        <h1 className={styles.Title}>Sign in</h1>
        <p className={styles.Text}>You need to login to use the service</p>
        <SignInForm />
        <div className={styles.Container_logn_in}>
          <p className={styles.Paragraph}>If you don't have an account yet</p>
          <a href="#" className={styles.Link}>
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

import ForgotYourPasswordForm from '@/component/ForgotYourPasswordForm/ForgotYourPasswordForm';
import styles from '../../component/scss/AuthPageTextStyles.module.scss';
import RenderImagesAuthPages from '@/component/RenderImages/RenderImagesAuthPages';

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
          <a href="#" className={styles.Link}>
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotYourPasswordPage;

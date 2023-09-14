import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';
import styles from './AuthNav.module.scss';

const AuthNav = () => {
  return (
    <>
      <div>Set goals and achieve them</div>
      <Link to={ROUTES.SignInPage} className={styles.signInButton}>
        Sign in
      </Link>
      <Link to={ROUTES.SignUpPage}>Sign up</Link>
    </>
  );
};

export default AuthNav;

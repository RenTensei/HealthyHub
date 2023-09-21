import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';
import styles from './AuthNavigation.module.scss';
import { ReactComponent as ProfileSvg } from '@/assets/svg/profile-circle.svg';

const AuthNavigation = () => {
  return (
    <div className={styles.header_nav_block}>
      <div className={styles.header_links}>
        <Link to={ROUTES.SignUpPage} className={styles.header_text}>
          Sign in
        </Link>
        <span className={styles.header_span}>/</span>
        <Link to={ROUTES.SignInPage} className={styles.header_text}>
          Sign up
        </Link>
      </div>
      <ProfileSvg width={28} height={28} stroke={'rgba(255, 255, 255, 1)'} />
    </div>
  );
};

export default AuthNavigation;

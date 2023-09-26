import { ROUTES } from '@/constants/routes';
import { NavLink } from 'react-router-dom';
import styles from './AuthNavigation.module.scss';
import { ReactComponent as ProfileSvg } from '@/assets/svg/profile-circle.svg';

const AuthNavigation = () => {
  return (
    <div className={styles.header_nav_block}>
      <div className={styles.header_links}>
        <NavLink to={ROUTES.SignInPage} className={styles.header_text}>
          Sign in
        </NavLink>
        <span className={styles.header_span}>/</span>
        <NavLink to={ROUTES.SignUpPage} className={styles.header_text}>
          Sign up
        </NavLink>
      </div>
      <ProfileSvg width={28} height={28} stroke={'rgba(255, 255, 255, 1)'} />
    </div>
  );
};

export default AuthNavigation;

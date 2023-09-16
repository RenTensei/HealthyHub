import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';
import styles from './AuthNavigation.module.scss';

const AuthNavigation = () => {
  return (
    <div className={styles.header_nav_block}>
      <div className={styles.header_links}>
        <Link to={ROUTES.SignUpPage} className={styles.header_text}>
          Sign in
        </Link>
        <span className={styles.header_span}>/</span>
        <Link to={ROUTES.SignInPage} className={styles.header_text}>
          Sing up
        </Link>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14.14 14.91a1.12 1.12 0 0 0-.28 0 3.814 3.814 0 0 1-3.687-3.815A3.821 3.821 0 0 1 14 7.268a3.829 3.829 0 0 1 3.827 3.827 3.822 3.822 0 0 1-3.687 3.815ZM21.863 22.61A11.59 11.59 0 0 1 14 25.667a11.59 11.59 0 0 1-7.863-3.057c.116-1.097.816-2.17 2.065-3.01 3.196-2.123 8.423-2.123 11.596 0 1.249.84 1.949 1.913 2.065 3.01Z"
        />
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14 25.667c6.444 0 11.667-5.224 11.667-11.667S20.443 2.333 14 2.333 2.334 7.557 2.334 14 7.557 25.667 14 25.667Z"
        />
      </svg>
    </div>
  );
}

export default AuthNavigation;
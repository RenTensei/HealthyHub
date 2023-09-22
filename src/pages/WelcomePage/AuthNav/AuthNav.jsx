import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';
import styles from './AuthNav.module.scss';
import RenderImagesAuthPages from '@/components/RenderImages/RenderImagesAuthPages';

const AuthNav = () => {
  return (
    <div className={styles.Container_sign_up}>
      <RenderImagesAuthPages />
      <div className={styles.Text_container_sign_up}>
        <h1 className={styles.Title_sign_up}>Set goals and achieve them</h1>
        <p className={styles.Text_sign_up}>
          The service will help you set goals and follow them.
        </p>
        <Link to={ROUTES.SignInPage} className={styles.Button_sign_in}>
          Sign in
        </Link>
        <Link to={ROUTES.SignUpPage} className={styles.Button_sign_up}>
          Sign up
        </Link>
        <ul className={styles.List_scope_sign_up}>
          <li className={styles.List_scope_li_sign_up}>Set goals</li>
          <li className={styles.List_scope_li_sign_up}>Watch your calories</li>
          <li className={styles.List_scope_li_sign_up}>
            Keep track of your water intake
          </li>
          <li className={styles.List_scope_li_sign_up}>Control your weight</li>
        </ul>
      </div>
    </div>
  );
};

export default AuthNav;

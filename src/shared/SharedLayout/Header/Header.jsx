import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useDispatch } from 'react-redux';
import { signIn } from '@/store/features/auth/thunks';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div>hello im header</div>
      <Link to={ROUTES.HomePage}>home</Link>
      <Link to={ROUTES.SignUpPage}>signup</Link>
      <Link to={ROUTES.SignInPage}>signin</Link>
      <button
        onClick={() =>
          dispatch(
            signIn({
              email: 'admin233@admin.com',
              password: 'admin23',
            })
          )
        }
      >
        Click me to sign in!
      </button>
    </header>
  );
};

export default Header;

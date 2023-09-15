import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>hello im header</div>
      <Link to={ROUTES.HomePage}>home</Link>
      <Link to={ROUTES.SignUpPage}>signup</Link>
      <Link to={ROUTES.SignInPage}>signin</Link>
    </header>
  );
};

export default Header;

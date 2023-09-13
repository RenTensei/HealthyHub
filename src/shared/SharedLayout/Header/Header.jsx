import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div>hello im header</div>
      <Link to={ROUTES.Home}>homepage</Link>
      <Link to={ROUTES.SignUpPage}>signup</Link>
      <Link to={ROUTES.SignInPage}>signin</Link>
    </>
  );
};

export default Header;

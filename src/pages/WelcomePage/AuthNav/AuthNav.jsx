import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';
import { SomeText } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <SomeText>Set goals and achieve them</SomeText>
      <Link to={ROUTES.Home}>link to homepage </Link>
      <Link to={ROUTES.MainPage}>link to mainpage</Link>
    </>
  );
};

export default AuthNav;

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn } from '@/store/features/auth/selectors';

export const PublicRoute = ({ component: Component, redirect }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? <Component /> : <Navigate to={redirect} />;
};

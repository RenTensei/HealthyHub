import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './scss/main.scss';
import Router from '@/routes/Router';
import { refresh, signIn } from '@/store/features/auth/thunks';
import { selectAppStatus, selectToken } from '@/store/features/auth/selectors';
import { getMyFoodIntake } from './store/features/foodIntake/thunks';
import { authActions } from './store/features/auth/authSlice';
import { APP_STATUS } from './constants/appStatus';

const App = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const appStatus = useSelector(selectAppStatus);

  useEffect(() => {
    if (token) {
      dispatch(refresh(token)).then(() => dispatch(getMyFoodIntake()));
    } else {
      dispatch(authActions.updateAppStatus(APP_STATUS.idle));
    }
  }, [dispatch, token]);

  return appStatus === APP_STATUS.initialLoading ? (
    <button
      onClick={() =>
        dispatch(
          signIn({
            email: 'admin23@admin.com',
            password: 'admin23',
          })
        )
      }
    >
      sign in!
    </button>
  ) : (
    <>
      <Router />
    </>
  );
};

export default App;

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './scss/main.scss';
import Router from '@/routes/Router';
import { refresh, signIn } from '@/store/features/auth/thunks';
import { selectAppStatus, selectToken } from '@/store/features/auth/selectors';
import { getMyFoodIntake } from './store/features/foodIntake/thunks';
import { APP_STATUS } from './constants/appStatus';

const App = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const appStatus = useSelector(selectAppStatus);

  useEffect(() => {
    if (token) dispatch(refresh(token)).then(() => dispatch(getMyFoodIntake()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return appStatus === APP_STATUS.initialLoading ? null : (
    <>
      <Router />
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
    </>
  );
  // return <>{isLoading ? <div>loading...</div> : <Router />}</>;
};

export default App;

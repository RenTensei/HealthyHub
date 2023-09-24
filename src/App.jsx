import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './scss/main.scss';
import Router from '@/routes/Router';
import { refresh } from '@/store/features/auth/thunks';
import { selectAppStatus, selectToken } from '@/store/features/auth/selectors';

import { authActions } from './store/features/auth/authSlice';
import { APP_STATUS } from './constants/appStatus';
import { Triangle } from 'react-loader-spinner';
import { Fetcher } from './components/Loaders/Fetcher';

const App = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const appStatus = useSelector(selectAppStatus);

  const [isLoadingOverlay, setIsLoadingOverlay] = useState(
    appStatus === APP_STATUS.initialLoading
  );

  useEffect(() => {
    if (appStatus === APP_STATUS.initialLoading) {
      setTimeout(() => {
        setIsLoadingOverlay(false);
      }, 1250);
    }
  }, [appStatus]);

  useEffect(() => {
    if (token) {
      dispatch(refresh(token));
    } else {
      dispatch(authActions.updateAppStatus(APP_STATUS.idle));
    }
  }, [dispatch, token]);

  return (
    <>
      {isLoadingOverlay && (
        <Triangle
          height="140"
          width="140"
          color="#FFC4F7"
          ariaLabel="triangle-loading"
          wrapperStyle={{
            width: '100vw',
            height: '100vh',
            zIndex: '999',
            backgroundColor: '#050505',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
          }}
        />
      )}

      {appStatus === APP_STATUS.fetching && <Fetcher />}

      <Router />

      {/* <button
        onClick={() =>
          dispatch(signIn({ email: 'admin23@admin.com', password: 'admin23' }))
        }
      >
        fake sign in!
      </button> */}
    </>
  );
};

export default App;

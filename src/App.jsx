import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './scss/main.scss';
import Router from '@/routes/Router';
import { refresh } from '@/store/features/auth/thunks';
import { selectAppStatus, selectToken } from '@/store/features/auth/selectors';

import { authActions } from './store/features/auth/authSlice';
import { APP_STATUS } from './constants/appStatus';
import { InfinitySpin, Triangle } from 'react-loader-spinner';

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
            zIndex: '555',
            backgroundColor: '#050505',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
          }}
        />
      )}

      {appStatus === APP_STATUS.fetching && (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            zIndex: '555',
            backgroundColor: 'rgba(5, 5, 5, 0.6)',
            // opacity: '60%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
          }}
        >
          <div style={{ transform: 'scale(1.5)' }}>
            <InfinitySpin
              style={{ color: 'red' }}
              color="#45FFBC"
              ariaLabel="fetching"
            />
          </div>
        </div>
      )}

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

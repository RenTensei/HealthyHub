import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './scss/main.scss';
import Router from '@/routes/Router';
import { refresh } from '@/store/features/auth/thunks';
import { selectToken } from '@/store/features/auth/selectors';
import { getMyFoodIntake } from './store/features/foodIntake/thunks';

const App = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) dispatch(refresh(token)).then(() => dispatch(getMyFoodIntake()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Router />
    </>
  );
  // return <>{isLoading ? <div>loading...</div> : <Router />}</>;
};

export default App;

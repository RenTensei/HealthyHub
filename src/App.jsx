import Router from '@/routes/Router';
import './scss/main.scss';
import ProfileSettingsPage from './pages/ProfileSettingsPage/ProfileSettingsPage';

const App = () => {
  console.log('app');

  return (
    <>
      <Router />
      
    </>
  );
  // return <>{isLoading ? <div>loading...</div> : <Router />}</>;
};

export default App;

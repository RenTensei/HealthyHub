import Router from '@/routes/Router';
import './scss/main.scss';

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

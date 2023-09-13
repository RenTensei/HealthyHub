// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import Router from '@/routes/Router';
import { GlobalStyle } from '@/styles/globalStyle';

const App = () => {
  console.log('app');

  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
  // return <>{isLoading ? <div>loading...</div> : <Router />}</>;
};

export default App;

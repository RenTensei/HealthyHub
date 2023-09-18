import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/store/store';
import App from '@/App.jsx';
import ModalManager from './shared/SharedLayout/Header/modals/ModalManager';
import { ModalProvider } from './context/ModalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/HealthyHub">
       <ModalProvider>
        <ModalManager />
           <App />
      </ModalProvider>
  </BrowserRouter>
    </PersistGate>
  </Provider>
    </React.StrictMode>
);

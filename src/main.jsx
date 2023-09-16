import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App.jsx';
import ModalManager from './shared/SharedLayout/Header/modals/ModalManager';
import { ModalProvider } from './context/ModalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/HealthyHub">
       <ModalProvider>
        <ModalManager />
           <App />
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);

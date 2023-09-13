import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

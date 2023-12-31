import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/Global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Dashboard />
  </React.StrictMode>
);

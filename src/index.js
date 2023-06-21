import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode theme={theme}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


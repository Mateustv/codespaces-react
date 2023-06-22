import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { CssBaseline } from '@mui/material';
import ContainerS from './Container';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ContainerS />
    </ThemeProvider>
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { ConfirmProvider } from 'material-ui-confirm';
import reportWebVitals from './reportWebVitals';
import App from './App';
import darkTheme from './themes/darkTheme';

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={darkTheme}>
          <ConfirmProvider
            defaultOptions={{
              confirmationButtonProps: { autoFocus: true, variant: 'contained' },
              cancellationButtonProps: { color: 'secondary' },
            }}
          >
            <CssBaseline />
            <App />
          </ConfirmProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ViewContextProvider } from './context/currentViewContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ViewContextProvider>
      <App />
    </ViewContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

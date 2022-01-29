import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ViewContextProvider } from './context/currentViewContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { BadPath } from './components/BadPath';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ViewContextProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<BadPath />} />
        </Routes>
      </ViewContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

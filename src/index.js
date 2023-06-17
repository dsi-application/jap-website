import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import { Provider } from 'react-redux'

import store from './store';

import './bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from "./i18n";
import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
dotenv.config('./../.env');

ReactDOM.render(
  <Suspense fallback="loading">
      <I18nextProvider i18n={i18n}>
  <Provider store={store}>
     
    <App />
    
  </Provider>,
  </I18nextProvider>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

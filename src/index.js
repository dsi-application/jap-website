import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import { Provider } from 'react-redux'

import store from './store';

import './bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import i18n from "./i18n";
import { Suspense } from "react";
=======
import i18n from "./i18n.js";
>>>>>>> 242d3928271ea073db40cae637a44fc7f2a1e8fd
import { I18nextProvider } from "react-i18next";
dotenv.config('./../.env');

ReactDOM.render(
  <Suspense fallback="loading">
      <I18nextProvider i18n={i18n}>
  <Provider store={store}>
<<<<<<< HEAD
     
=======
       <I18nextProvider i18n={i18n}>
>>>>>>> 242d3928271ea073db40cae637a44fc7f2a1e8fd
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

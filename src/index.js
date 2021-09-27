import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById('root')
);



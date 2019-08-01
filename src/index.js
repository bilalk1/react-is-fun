import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './app';
import { store } from './store';
const app = document.getElementById('root')
render(
  <Provider store={store} >
    <App />
  </Provider>, app);

import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store';
import { App } from './App';
import React from 'react';
const app = document.getElementById('root')
render(
  <Provider store={store} >
    <App />
  </Provider>, app);


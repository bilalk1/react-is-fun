import { render } from 'react-dom';
import { Provider } from 'react-redux'
import React from 'react';
import App from './App';
import store from './store';
const app = document.getElementById('root')
render(
    <Provider store={store} >
        <App />
    </Provider>, app);


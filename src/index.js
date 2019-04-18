import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';

import './styles/styles.scss';

const store = configureStore();

const App = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
render(App, document.getElementById('app'));

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './redux/rootReducer/rootReducer';
import rootSaga from './redux/rootSaga/rootSaga';
import App from './components/app/app';

import './index.scss';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

render(
  (
    <Provider store={store}>
      <App />
    </Provider>),
  document.getElementById('root'),
);

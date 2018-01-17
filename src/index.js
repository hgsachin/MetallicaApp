import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import thunk from 'redux-thunk';

import App from './components/app';
import Home from './components/home';
import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <Route exact path='/' component={Home} />
    </BrowserRouter>
  </Provider>
  , document.querySelector('#app'));
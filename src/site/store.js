import { applyMiddleware, compose, createStore } from 'redux';

import AppReducer from './reducers';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const store = createStore(
  AppReducer,
  {},
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory as createHistory } from 'history';
import { combineReducers } from 'redux';

import counter from './modules/Counter/reducer';
import navbar from './modules/NavBar/reducer';
import productList from './modules/Products/ProductList/reducer';


export const history = createHistory();

const rootReducer = combineReducers({
  counter,
  navbar,
  productList,
  router: connectRouter(history),
});

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;

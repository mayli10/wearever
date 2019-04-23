import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory as createHistory } from 'history';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import counter from './modules/Counter/reducer';
import navBar from './modules/NavBar/reducer';
import sideBar from './modules/SideBar/reducer';
import filterBar from './modules/FilterBar/reducer';
import productList from './modules/Products/ProductList/reducer';
import productPage from './modules/Products/ProductPage/reducer';

export const history = createHistory();

const rootReducer = combineReducers({
  counter,
  navBar,
  sideBar,
  productList,
  filterBar,
  form: formReducer,
  productPage,
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

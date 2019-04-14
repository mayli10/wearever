import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './App.css';
import classNames from 'classnames';

// import { ReactComponent as Logo } from './images/logo.svg';
import Home from './components/Home';
import EmailPopup from './components/EmailPopup';
import ProductListPage from './components/ProductListPage';
import DefaultNavBar from './components/DefaultNavBar';
import store, { history } from './store';

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={() => <div>signup page</div>}/>
        <Route exact path="/productlistpage" component={ProductListPage}/>
      </div>
    </ConnectedRouter>
  </Provider>
);

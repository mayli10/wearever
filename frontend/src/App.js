import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import SignUp from './components/Signup'
import './App.css';
import classNames from 'classnames';


// import { ReactComponent as Logo } from './images/logo.svg';
import Home from './components/Home';
import EmailPopup from './components/EmailPopup';
import ProductListPage from './components/ProductListPage';
import ProductPage from './components/ProductPage';
import DefaultNavBar from './components/DefaultNavBar';
import store, { history } from './store';

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={ProductListPage}/>
        <Route exact path="/signup" component={() => <SignUp/>}/>
        <Route path="/product/:id" component = {ProductPage} />
        <Route exact path="/productlistpage" component={ProductListPage}/>
      </div>
    </ConnectedRouter>
  </Provider>
);

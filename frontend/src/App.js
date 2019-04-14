import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './App.css';
import classNames from 'classnames';

// import { ReactComponent as Logo } from './images/logo.svg';
import Home from './components/Home';
import EmailPopup from './components/EmailPopup';
import NavBar from './modules/NavBar/Container';
import FilterBar from './modules/FilterBar/Container';
import SideBar from './modules/SideBar/Container';
import Counter from './modules/Counter/Container';
import store, { history } from './store';

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <EmailPopup/>
        <NavBar/>
        <div className='main-container'>
          <SideBar/>
          <div>
            <div className='filter-container'>
              <FilterBar/>
            </div>
            <Route exact path="/" component={Home}/>
          </div>
        </div>
        <Route exact path="/signup" component={() => <div>signup page</div>}/>
      </div>
    </ConnectedRouter>
  </Provider>
);

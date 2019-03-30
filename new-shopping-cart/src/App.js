import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Home from './components/Home';
import Counter from './modules/Counter/Container';
import store, { history } from './store';

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <hr />
        <Route exact path="/" component={Home}/>
        <Route exact path="/counter" component={Counter}/>
      </div>
    </ConnectedRouter>
  </Provider>
);

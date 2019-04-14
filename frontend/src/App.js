import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import SignUp from './components/Signup'

// import { ReactComponent as Logo } from './images/logo.svg';
import Home from './components/Home';
import EmailPopup from './components/EmailPopup';
import NavBar from './modules/NavBar/Container';
import Counter from './modules/Counter/Container';
import store, { history } from './store';

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <EmailPopup/>
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={() => <SignUp/>}/>
        <Route path="/product" component = {() => <div>product page</div>} />
      </div>
    </ConnectedRouter>
  </Provider>
);


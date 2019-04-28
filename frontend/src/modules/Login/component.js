import React, { Component } from 'react';
import {StyledFirebaseAuth} from 'react-firebaseui';
import firebase from 'firebase'
import { withFirebase } from '../../components/Firebase';


class Login extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'redirect',
      // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
      signInSuccessUrl: '/',
      signInOptions: [
        this.props.firebase.auth.GoogleProvider.PROVIDER_ID,
        this.props.firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ]
    };
    return (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    );
  }
}

export default withFirebase(Login)
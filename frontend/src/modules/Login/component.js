import React, { Component } from 'react'
import {StyledFirebaseAuth} from 'react-firebaseui'
import firebase from 'firebase'

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'redirect',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Github as the auth provider.
  signInOptions: [
    //  firebase.auth.GithubAuthProvider.PROVIDER_ID,
     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ]
};

class Login extends Component {
  render() {
    return (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    );
  }
}

export default Login
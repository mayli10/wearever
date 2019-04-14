import React, { Component } from 'react';
import SignupForm from '../modules/Signup-Form/Form'

class SignUp extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <SignupForm onSubmit={this.submit} />
  }
}

export default SignUp
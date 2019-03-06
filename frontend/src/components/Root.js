import React, { Component } from 'react';
import AuthForm from './AuthForm';
import Home from './Home';
class Root extends Component {
  render() {
    return <div>{false ? <Home /> : <AuthForm />};</div>;
  }
}

export default Root;

import React, { Component } from 'react';
import { Button, FormControl, FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signup } from '../actions/account';
import fetchStates from '../reducers/fetchStates';
class AuthForm extends Component {
  state = { username: '', password: '' };

  updateUsername = e => {
    this.setState({ username: e.target.value });
  };
  updatePassword = e => {
    this.setState({ password: e.target.value });
  };

  signup = () => {
    const { username, password } = this.state;
    this.props.signup({ username, password });
  };
  login = () => {
    console.log('this.state', this.state);
  };

  get Error() {
    if (this.props.account.status === fetchStates.error) {
      return <div>{this.props.account.message}</div>;
    }
  }
  render() {
    return (
      <div>
        <h2>Dragon Stack</h2>

        <form>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.username}
              placeholder="username"
              onChange={this.updateUsername}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.updatePassword}
            />
          </FormGroup>
        </form>

        <div>
          <Button onClick={this.login}>Log In</Button>
          <span> or </span>
          <Button onClick={this.signup}>Sign Up</Button>
        </div>
        <br />
        {this.Error}
      </div>
    );
  }
}
//pass in action creator as 'mapdispatchtoprops'
export default connect(
  ({ account }) => ({ account }),
  { signup }
)(AuthForm);

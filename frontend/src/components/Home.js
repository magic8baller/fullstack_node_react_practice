import React, { Component } from 'react';

import Dragon from './Dragon';
import Generation from './Generation';
import {connect} from 'react-redux;
import Button from 'react-bootstrap/Button';
import { logout } from '../actions/account';
class Home extends Component {
  render() {
    return (
      <div>
      <Button onClick={this.props.logout} className='logout-button'>Log Out</Button>
        <h2>Dragon Stack</h2>
        <Generation />
        <Dragon />
      </div>
    );
  }
}

export default connect(null, {logout})(Home);

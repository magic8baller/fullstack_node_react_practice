import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { fetchDragon } from '../actions/dragon';
import DragonAvatar from './DragonAvatar';

class Dragon extends Component {
  componentDidMount() {
    this.props.fetchDragon();
  }

  render() {
    console.log('dragon props are:', this.props);
    const { fetchDragon, dragon } = this.props;
    return (
      <div>
        <Button onClick={fetchDragon}>New Dragon</Button>
        <DragonAvatar dragon={dragon} />
      </div>
    );
  }
}

export default connect(
  ({ dragon }) => ({ dragon }),
  { fetchDragon }
)(Dragon);

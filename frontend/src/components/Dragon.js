import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import DragonAvatar from './DragonAvatar';
const DEFAULT_DRAGON = {
  dragonId: '',
  generationId: '',
  nickname: '',
  birthdate: '',
  traits: []
};
class Dragon extends Component {
  state = { dragon: DEFAULT_DRAGON };

  componentDidMount() {
    this.fetchDragon();
  }
  fetchDragon = () => {
    fetch('http://localhost:4001/dragon/new')
      .then(r => r.json())
      .then(dragonJson => this.setState({ dragon: dragonJson.dragon }))
      .catch(err => console.error('error', err));
  };
  render() {
    return (
      <div>
        <Button onClick={this.fetchDragon}>New Dragon</Button>
        <DragonAvatar dragon={this.state.dragon} />
      </div>
    );
  }
}

export default Dragon;

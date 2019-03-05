import React, { Component } from 'react';
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
    const { generationId, dragonId, traits } = this.state.dragon;
    return <DragonAvatar dragon={this.state.dragon} />;
  }
}

export default Dragon;

import React, { Component } from 'react';

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
    return (
      <div>
        <span>G-{generationId}</span>
        <br />
        <span>I-{dragonId}</span>
        <br />
        {traits.map(trait => trait.traitValue).join(', ')}
      </div>
    );
  }
}

export default Dragon;

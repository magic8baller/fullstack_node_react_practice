import React, { Component } from 'react';

const DEFAULT_GENERATION = { generationId: '', expiration: '' };
class Generation extends Component {
  state = { generation: DEFAULT_GENERATION };

  componentDidMount() {
    this.fetchGeneration();
  }
  fetchGeneration = () => {
    fetch('http://localhost:4001/generation')
      .then(r => r.json())
      .then(generationJson => {
        const { generation } = generationJson;
        this.setState({ generation });
      })
      .catch(err => console.error(err));
  };

  render() {
    const { generation } = this.state;
    return (
      <div>
        <h3>Generation {generation.generationId}. Expires On:</h3>
        <h4>{new Date(generation.expiration).toString()}</h4>
      </div>
    );
  }
}

export default Generation;

import React, { Component } from 'react';

const DEFAULT_GENERATION = { generationId: '', expiration: '' };
const MIN_DELAY = 3000;
class Generation extends Component {
  state = { generation: DEFAULT_GENERATION };

  timer = null;

  componentDidMount() {
    this.fetchNextGeneration();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
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

  fetchNextGeneration = () => {
    this.fetchGeneration();

    let delay =
      new Date(this.state.generation.expiration).getTime() -
      new Date().getTime();
    if (delay < MIN_DELAY) {
      delay = MIN_DELAY;
    }
    setTimeout(() => this.fetchNextGeneration(), 10000);
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

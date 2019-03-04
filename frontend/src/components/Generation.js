import React, { Component } from 'react';

class Generation extends Component {
  state = {};
  render() {
    const generation = { generationId: 9999, expiration: '2020-05-01' };
    return (
      <div>
        <h3>Generation {generation.generationId}. Expires On:</h3>
        <h4>{new Date(generation.expiration).toString()}</h4>
      </div>
    );
  }
}

export default Generation;

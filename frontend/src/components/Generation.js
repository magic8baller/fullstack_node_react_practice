import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGeneration } from '../actions/generation';
import fetchStates from '../reducers/fetchStates';
const MIN_DELAY = 30000;
class Generation extends Component {
  timer = null;
  componentDidMount() {
    this.fetchNextGeneration();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  fetchNextGeneration = () => {
    this.props.fetchGeneration();

    let delay = MIN_DELAY;

    //   new Date(this.props.generation.expiration).getTime() -
    //   new Date().getTime();

    // if (delay < MIN_DELAY) {
    //   delay = MIN_DELAY;
    // }

    this.timer = setTimeout(() => this.fetchNextGeneration(), delay);
  };

  render() {
    console.log('this.props', this.props);

    const { generation } = this.props;

    if (generation.status === fetchStates.error) {
      return <div>{generation.message}</div>;
    }

    return (
      <div>
        <h3>Generation {generation.generationId}. Expires on:</h3>
        <h4>{new Date(generation.expiration).toString()}</h4>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const generation = state.generation;

  return { generation };
};

const componentConnector = connect(
  mapStateToProps,
  { fetchGeneration }
);

export default componentConnector(Generation);

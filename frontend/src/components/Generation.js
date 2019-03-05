import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGeneration } from '../actions/generation';
import fetchStates from '../reducers/fetchStates';

const MIN_DELAY = 3000;
class Generation extends Component {
  timer = null;

  componentDidMount() {
    this.fetchNextGeneration();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  // fetchGeneration = () => {
  //   fetch('http://localhost:4001/generation')
  //     .then(r => r.json())
  //     .then(generationJson => {
  //       this.props.dispatchGeneration;
  //     })
  //     .catch(err => console.error(err));
  // };

  fetchNextGeneration = () => {
    const { fetchGeneration, generation } = this.props;
    fetchGeneration();

    let delay =
      new Date(generation.expiration).getTime() - new Date().getTime();
    if (delay < MIN_DELAY) {
      delay = MIN_DELAY;
    }
    this.timer = setTimeout(() => this.fetchNextGeneration(), 10000);
  };

  render() {
    console.log('props are', this.props);

    const { generation } = this.props;
    //guard clause
    if (generation.status === fetchStates.fetching) {
      return <div>...</div>;
    }

    if ((generation.status = fetchStates.error)) {
      return <div>{generation.message}</div>;
    }
    return (
      <div>
        <h3>Generation {generation.generationId}. Expires On:</h3>
        <h4>{new Date(generation.expiration).toString()}</h4>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const generation = state.generation;
  return { generation };
};

export default connect(
  mapStateToProps,

  { fetchGeneration }
)(Generation);

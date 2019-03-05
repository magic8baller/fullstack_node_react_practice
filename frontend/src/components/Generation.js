import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generationActionCreator } from '../actions/generation';
const MIN_DELAY = 3000;
class Generation extends Component {
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
        // this.props.dispatch(generationActionCreator(generationJson.generation));
        this.props.dispatchGeneration;
      })
      .catch(err => console.error(err));
  };

  fetchNextGeneration = () => {
    this.fetchGeneration();

    let delay =
      new Date(this.props.generation.expiration).getTime() -
      new Date().getTime();
    if (delay < MIN_DELAY) {
      delay = MIN_DELAY;
    }
    setTimeout(() => this.fetchNextGeneration(), 10000);
  };

  render() {
    console.log('props are', this.props);
    const { generation } = this.props;
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

const mapDispatchToProps = dispatch => {
  return {
    dispatchGeneration: generation =>
      dispatch(generationActionCreator(generation))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Generation);

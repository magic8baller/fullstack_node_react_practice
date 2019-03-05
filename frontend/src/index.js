import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import Dragon from './components/Dragon';
import Generation from './components/Generation';
import './index.css';
const DEFAULT_GENERATION = { generationId: '', expiration: '' };
const GENERATION_ACTION_TYPE = 'GENERATION_ACTION_TYPE';
const generationReducer = (state, action) => {
  if (action.type === GENERATION_ACTION_TYPE) {
    return { generation: action.generation };
  }
  return {
    generation: DEFAULT_GENERATION
  };
};

const store = createStore(generationReducer);

store.subscribe(() => console.log('store state update', store.getState()));

console.log('store', store);
store.dispatch({
  type: GENERATION_ACTION_TYPE,
  generation: { generationId: 'goo', expiration: 20 }
});
console.log('store.getState()', store.getState());

//wrapper AROUND action
const generationActionCreator = payload => {
  return {
    type: GENERATION_ACTION_TYPE,
    generation: payload
  };
};
const zooAction = generationActionCreator({
  generationId: 'zoo',
  expiration: 'bar'
});

store.dispatch(zooAction);

fetch('http://localhost:4001/generation')
  .then(r => r.json())
  .then(json => {
    store.dispatch(generationActionCreator(json.generation));
  });
render(
  <div>
    <h2>Dragon Stack</h2>
    <Generation />
    <Dragon />
  </div>,

  document.getElementById('root')
);

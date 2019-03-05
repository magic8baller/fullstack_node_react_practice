import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { generationActionCreator } from './actions/generation';
import Dragon from './components/Dragon';
import Generation from './components/Generation';
import './index.css';
import { generationReducer } from './reducers/index';

if (module.hot) {
  module.hot.accept();
}

const store = createStore(
  generationReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => console.log('store state update', store.getState()));

fetch('http://localhost:4001/generation')
  .then(r => r.json())
  .then(json => {
    store.dispatch(generationActionCreator(json.generation));
  });

render(
  <Provider store={store}>
    <h2>Dragon Stack</h2>
    <Generation />
    <Dragon />
  </Provider>,
  document.getElementById('root')
);

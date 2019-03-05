import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Dragon from './components/Dragon';
import Generation from './components/Generation';
import configureStore from './configureStore';
import './index.css';

const store = configureStore();

const renderApp = () =>
  render(
    <Provider store={store}>
      <h2>Dragon Stack</h2>
      <Generation />
      <Dragon />
    </Provider>,
    document.getElementById('root')
  );

renderApp();
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept(renderApp);
}

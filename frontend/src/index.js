import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { fetchAuthenticated } from './actions/account';
import Root from './components/Root';
import configureStore from './configureStore';
import './index.css';
const store = configureStore();

const renderApp = () =>
  store.dispatch(fetchAuthenticated()).then(() => {
    render(
      <Provider store={store}>
        <Root />
      </Provider>,
      document.getElementById('root')
    );
  });

renderApp();
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept(renderApp);
}

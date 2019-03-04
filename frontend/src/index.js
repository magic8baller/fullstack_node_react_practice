import React from 'react';
import { render } from 'react-dom';
import Generation from './components/Generation';

if (module.hot) {
  module.hot.accept();
}

render(
  <div>
    <h2>Dragon Stack</h2>
    <Generation />
  </div>,
  document.getElementById('root')
);

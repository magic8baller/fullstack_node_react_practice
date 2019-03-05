import React from 'react';
import { render } from 'react-dom';
import Dragon from './components/Dragon';
import Generation from './components/Generation';
if (module.hot) {
  module.hot.accept();
}

render(
  <div>
    <h2>Dragon Stack</h2>
    <Generation />
    <Dragon />
  </div>,
  document.getElementById('root')
);

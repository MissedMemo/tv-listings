import React from 'react';
import {render} from 'react-dom';
import App from './components/app';

render(
  <App greeting='Hey, React!' />,
  document.getElementById('root')
);

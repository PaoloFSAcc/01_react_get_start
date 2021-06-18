import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.hydrate(//hydrate instead of render 
  <App />,
  document.getElementById('mountNode'),
);
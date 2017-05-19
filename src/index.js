import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { HashRouter } from 'react-router-dom';
import { browserHistory } from 'react-router-dom';

ReactDOM.render(
  <HashRouter history={browserHistory}>
    <App/>
  </HashRouter>,
  document.getElementById('root')
);

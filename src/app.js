import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import './stylesheets/main';
import Routes from './routes';

let history = createHistory();

ReactDOM.render((
  <Router history={history}>{Routes}</Router>
), document.getElementById('app'))

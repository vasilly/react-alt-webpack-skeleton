import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Main from './components/main';
import Home from './components/home';
import Edit from './components/edit';

const routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    <Route path="edit" component={Edit}/>
  </Route>
);

export default routes;

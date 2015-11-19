import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Index from './components/index';
import HomeContainer from './components/HomeContainer';
import EditContainer from './components/EditContainer';

const routes = (
  <Route path="/" component={Index}>
    <IndexRoute component={HomeContainer}/>
    <Route path="edit" component={EditContainer}/>
  </Route>
);

export default routes;

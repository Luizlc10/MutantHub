/*jshint esversion: 6 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './components/search/search';
import Dashboard from './components/dashboard/dashboard';

const Routes = () => (
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/search' component={Search}/>
    </Switch>
)

export default Routes;

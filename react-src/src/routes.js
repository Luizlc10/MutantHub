/*jshint esversion: 6 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Citizens from './components/citizens/citizens';
import Dashboard from './components/dashboard/dashboard';

const Routes = () => (
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/citizens' component={Citizens}/>
    </Switch>
)

export default Routes;

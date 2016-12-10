import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import RootContainer from './containers'

const Routes = () =>
  <Router history={browserHistory}>
    <Route path="/" component={RootContainer}>
    </Route>
  </Router>

export default Routes

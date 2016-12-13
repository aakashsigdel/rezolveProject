import React from 'react'
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router'
import RootContainer from './containers'
import MyBooks from './components/MyBooks'
import Charts from './components/Charts'

const Routes = () =>
  <Router history={browserHistory}>
    <Route path="/" component={RootContainer}>
      <IndexRoute component={MyBooks} />
      <Route path="/charts" componet={Charts} />
    </Route>
  </Router>

export default Routes

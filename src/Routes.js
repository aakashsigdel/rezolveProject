import React from 'react'
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router'
import RootContainer from './containers'
import MyBooks from './components/MyBooks'
import Charts from './components/Charts'

const Routes = () =>
  <Router history={browserHistory}>
    <Route path="/" component={RootContainer}>
      <IndexRoute component={MyBooks} />
      <Route path="/charts" component={Charts} />
      <Route path="/search" component={MyBooks}>
        <Route path="/search/:searchText" component={MyBooks} />
      </Route>
      <Route path="*" component={MyBooks} />
    </Route>
  </Router>

export default Routes

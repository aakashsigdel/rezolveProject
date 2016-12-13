import React from 'react'
import { Link } from 'react-router'

import './BookChartNav.scss'

const BookChartNav = props =>
  <div className="nav-container">
    <Link to="/" activeClassName="nav-link-active" className="nav-link" onlyActiveOnIndex={true}>
      MY BOOKS
    </Link>
    <div className="nav-element-separator">&nbsp; | &nbsp;</div>
    <Link to="/charts" activeClassName="nav-link-active" className="nav-link">
      CHARTS
    </Link>
  </div>

export default BookChartNav

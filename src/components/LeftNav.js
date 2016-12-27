import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { pick } from 'ramda'

import { searchBooks } from '../actions/books'

import './LeftNav.scss'

export const RecentSearch = props =>
  <Link to={"/search/" + props.searchText}
    className="recent-search"
    activeClassName="recent-search-link-active"
    onClick={props.handleClick}
  >
    {props.searchText.charAt(0).toUpperCase() + props.searchText.slice(1)}
  </Link>

export const LeftNav = props =>
  <div className="recent-searches">
    <div className="title">{'RECENT SEARCHES'}</div>
    <div>
      {
        props.search.recentSearches.map((item, index) =>
          <RecentSearch
            key={index}
            searchText={item}
            handleClick={() => props.dispatch(searchBooks(item))}
          />
        )
      }
    </div>
  </div>

const mapStateToProps = pick(['search'])

export default connect(mapStateToProps)(LeftNav)

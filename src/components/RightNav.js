import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { searchBooks } from '../actions/books'

import './RightNav.scss'

export const RecentSearch = props =>
  <Link to={"/search/" + props.searchText}
    className="recent-search"
    activeClassName="recent-search-link-active"
    onClick={props.handleClick}
  >
    {props.searchText.charAt(0).toUpperCase() + props.searchText.slice(1)}
  </Link>

export const RightNav = props =>
  <div className="recent-searches">
    <div className="title">{'RECENT SEARCHES'}</div>
    <div>
      {
        props.recentSearches.map((item, index) =>
          <RecentSearch
            key={index}
            searchText={item}
            handleClick={() => props.dispatch(searchBooks(item))}
          />
        )
      }
    </div>
  </div>

const mapStateToProps = state => state.search

export default connect(mapStateToProps)(RightNav)

import React from 'react'

require('./RightNav.scss')

const RecentSearch = props =>
  <div className="recent-search">
    {props.searchText.charAt(0).toUpperCase() + props.searchText.slice(1)}
  </div>

const RightNav = props =>
  <div className="recent-searches">
    <div className="title">{'RECENT SEARCHES'}</div>
    <div>
      {
        props.recentSearches.map((item, index) =>
          <RecentSearch searchText={item} key={index} />
        )
      }
    </div>
  </div>

export default RightNav

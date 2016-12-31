import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { NavItem, Button, Nav, Navbar, FormGroup, FormControl } from 'react-bootstrap'
import { pick } from 'ramda'

import { searchChangeText } from '../actions/search'
import { searchBooks } from '../actions/books'
import { searchWillSearch } from '../actions/search'

import './Header.scss'

export const  handleSearch = (props) => {
  props.dispatch(searchBooks(props.search.searchText))
  props.dispatch(searchWillSearch(props.search.searchText))
}

export const Header = (props) =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Rezolve Books</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Search"
            onChange={e => props.dispatch(searchChangeText(e.target.value))}
          />
        </FormGroup>
        {' '}
        <Link to={"/search/" + props.search.searchText}>
          <Button onClick={() => handleSearch(props)}>
            Search
          </Button>
        </Link>
      </Navbar.Form>
      <div className="pull-right user-container">
        <div className="profile-picture" />
        <div className="user-description">
          <div className="user-name">
            John Doe
          </div>
          <div className="books-number">
            {props.mybooks.books.length + ' books'}
          </div>
        </div>
      </div>
  </Navbar>


export default connect(pick(['search', 'mybooks']))(Header)

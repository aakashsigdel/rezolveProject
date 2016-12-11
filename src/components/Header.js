import React from 'react'
import { NavItem, Button, Nav, Navbar, FormGroup, FormControl } from 'react-bootstrap'

require('./Header.scss')

const Header = (props) =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Rezolve Books</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
      </Navbar.Form>
      <div className="pull-right user-container">
        <div className="profile-picture" />
        <div className="user-description">
          <div className="user-name">
            John Doe
          </div>
          <div className="books-number">
            10 books
          </div>
        </div>
      </div>
  </Navbar>

export default Header

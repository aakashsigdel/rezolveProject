import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import Header from '../components/Header'
import RightNav from '../components/RightNav'
import MyBooks from '../components/MyBooks'
import BookChartNav from '../components/BookChartNav'
import { searchBooks } from '../actions/books'
import store from '../store'

import './index.scss'

export const books = [
  {
    ISBN: 111,
    author: 'John Doe',
    title: 'I am here',
    thumbnail_url: 'https://covers.openlibrary.org/b/id/295577-M.jpg'
  },
  {
    ISBN: 112,
    author: 'Klio Author Sir',
    title: 'Phones will be always be gone',
    thumbnail_url: 'https://covers.openlibrary.org/b/id/295577-M.jpg'
  },
  {
    ISBN: 113,
    author: 'Olivia Dolo',
    title: 'There will be water in the water',
    thumbnail_url: 'https://covers.openlibrary.org/b/id/295577-M.jpg'
  }
]

store.dispatch(searchBooks('lord of the rings'))

const RootContainer = props =>
    <Grid>
      <Row>
        <Col md={12} lg={12}>
          <Header />
        </Col>
      </Row>
      <Row className="fill-page">
        <Col md={3} lg={3} className="col-with-border fill-page">
          <RightNav recentSearches={['hen', 'duck', 'turtle']} />
        </Col>
        <Col xs={12} md={9} lg={9} className="fill-page">
          <BookChartNav />
          {props.children}
        </Col>
      </Row>
    </Grid>

export default RootContainer

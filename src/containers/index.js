import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { compose } from 'ramda'

import Header from '../components/Header'
import LeftNav from '../components/LeftNav'
import MyBooks from '../components/MyBooks'
import BookChartNav from '../components/BookChartNav'
import ErrorModal from '../components/ErrorModal'
import { clearError } from '../actions/error'
import { searchBooks } from '../actions/books'


import './index.scss'

const reloadData = props => {
  props.dispatch(searchBooks(props.search.searchText))
  return props
}

const dismissErrorModal = props => {
  props.dispatch(clearError())
  return props
}

const RootContainer = props =>
  <Grid>
    <Row>
      <Col md={12} lg={12}>
        <Header />
      </Col>
    </Row>
    <Row className="fill-page">
      <Col md={3} lg={3} className="col-with-border fill-page">
        <LeftNav recentSearches={['hen', 'duck', 'turtle']} />
      </Col>
      <Col xs={12} md={9} lg={9} className="fill-page">
        <BookChartNav />
        {props.children}
        {
          props.books.error
            ? <ErrorModal
                message={props.books.error.msg}
                onReload={() => compose(reloadData, dismissErrorModal)(props)}
                onCancel={() => dismissErrorModal(props)}
              />
            : null
        }
      </Col>
    </Row>
  </Grid>

const mapStateToProps = state => state
export default connect(mapStateToProps)(RootContainer)

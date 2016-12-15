import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import Header from '../components/Header'
import RightNav from '../components/RightNav'
import MyBooks from '../components/MyBooks'
import BookChartNav from '../components/BookChartNav'

import './index.scss'

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

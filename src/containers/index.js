import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import Header from '../components/Header'
import RightNav from '../components/RightNav'

require('./index.scss')

const RootContainer = () =>
    <Grid>
      <Row>
        <Col md={12} lg={12}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col md={3} lg={3} className="col-with-border">
          <RightNav recentSearches={['hen', 'duck', 'turtle']} />
        </Col>
        <Col xs={12} md={9} lg={9}>
        </Col>
      </Row>
    </Grid>

export default RootContainer

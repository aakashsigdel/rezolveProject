import React from 'react'
import { connect } from 'react-redux'
import { FormGroup, ControlLabel, FormControl, optopn } from 'react-bootstrap'
const LineChart = require("react-chartjs").Line
import { changeChartYear } from '../actions/chart'

import './Chart.scss'

const getChartData = (mybooks, year) => {
  const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const booksCount = mybooks.reduce((accu, curr) => {
    const bookAdded= (new Date(curr.addDate))
    if (bookAdded.getFullYear() === year) {
      accu[bookAdded.getMonth()] = accu[bookAdded.getMonth()] + 1 || 1
    }
    return accu
  }, data)

  return {
    labels: [
      'January', 'February', 'March',
      'April', 'May', 'June',
      'July', 'August', 'September',
      'October', 'November', 'December'
    ],
    datasets: [{
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: booksCount,
      spanGaps: false
    }]
  }
}

const handleSelectChange = (e, props) => {
  const value = e.target.value
  if (value === 'select')
    return
  props.dispatch(changeChartYear(Number(value)))
}

const Charts = props =>
  <div className="chart-container">
    <FormGroup controlId="formControlsSelect">
      <FormControl componentClass="select" placeholder="select" onChange={e => handleSelectChange(e, props)}>
        <option value="select">select year</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
      </FormControl>
    </FormGroup>
    <LineChart data={getChartData(props.books, props.year)} width="600" height="350" />
    <div className="chart-label">
      {'Books Read in ' + props.year}
    </div>
  </div>

const mapStateToProps = state => ({...state.mybooks, ...state.chart})

export default connect(mapStateToProps)(Charts)

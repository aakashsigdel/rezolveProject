import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import './ErrorModal.scss'

const ErrorModal = props =>
  <div className="error-container">
    <div className="error-heading">
      <div className="error"> Error </div>
      <div className="error-cross"> ✕ </div>
    </div>
    <div className="error-message">
      {props.message}
    </div>
    <div className="error-buttons">
      <Link to="/">
        <button className="nope" onClick={props.onCancel}>Cancel</button>
    </Link>
      <button className="ok" onClick={props.onReload}>Reload</button>
    </div>
  </div>

export default ErrorModal

import fetch from 'isomorphic-fetch'
import { compose } from 'ramda'
import { Left, Right } from './either'

export const API_HOST = 'https://openlibrary.org'

const rejectHTTPErrors = minimumErrorStatus => response => {
  if (response.status > minimumErrorStatus) {
    return Left({
      type: 'status_error',
      status: response.status,
      msg: `Got ${response.status}`,
      response
    })
  }

  return Right(response)
}

const parseJSON = res => {
  // no content
  if (res.status === 204) {
    return Promise.resolve({})
  }

  return res.json()
}

const mapJSONError = p => p.then(
  Right,
  error => Left({
    type: 'json_error',
    msg: 'Unable to parse response',
    error
  })
)



class Api {
  _basicRequest = (path, minimumErrorStatus = 400) => {
    const request = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }

    return fetch(API_HOST + path, request)
      .then(
        Right,
        error => {
          console.log(error)
          return Left({
            type: 'network_error',
            msg: error.message,
            error
          })
        })
      .then(r => r.chain(rejectHTTPErrors(minimumErrorStatus)))
  }

  _jsonRequest = path => {
    return this._basicRequest(path)
      .then(r => r.chain(compose(mapJSONError, parseJSON)))
  }

  searchBooks = searchText => {
    return this._jsonRequest('/search.json?q=' + searchText)
  }
}

export default new Api()

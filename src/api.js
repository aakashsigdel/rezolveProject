const API_HOST = 'https://openlibrary.org'

class Api {
  _basicRequest = path => {
    const request = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }

    return fetch(API_HOST + path, request)
            .then(response => response.json(), this.handleErrors)
            .catch(this.handleErrors)
  }

  _handleErrors = error => {
    console.log(error)
  }

  searchBooks = searchText => {
    return this._basicRequest('/search.json?q=' + searchText)
  }
}

export default new Api()

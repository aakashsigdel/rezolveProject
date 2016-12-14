import { assoc, compose, map, omit, pick, prop, slice } from 'ramda'
import Api from '../api'

export const searchBooks = searchText => {
  return (dispatch, getState) => {
    dispatch({type: 'SEARCH_BOOKS_REQUEST'})
    return Api.searchBooks(searchText)
      .then(json => dispatch(receiveBooks(json)))
  }
}

export const getCoverImage = coverEditionKey =>
  !!coverEditionKey
    ? `https://covers.openlibrary.org/b/olid/${coverEditionKey}-M.jpg`
    : 'http://placehold.it/180x298?text=No Image Found'

const pickKeyForBooks = compose(
  map(compose(
    omit(['cover_edition_key']),
    book => assoc('cover_image', getCoverImage(book.cover_edition_key), book),
    pick(['author_name', 'title', 'cover_edition_key', 'key'])
  )),
  slice(0, 20),
  prop('docs')
)

const receiveBooks = books => ({
  type: 'RECEIVE_BOOKS',
  books: pickKeyForBooks(books)
})

export const addBook = book => ({
  type: 'ADD_BOOK',
  book
})

import configureMockStore from 'redux-mock-store'
import nock from 'nock'
import thunk from 'redux-thunk'
import { assoc, compose, omit } from 'ramda'
import * as actions from '../../src/actions/books'
import { API_HOST } from '../../src/api'

const mockStore = configureMockStore([thunk])

describe('books actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should create RECEIVE_BOOKS when done searching books', () => {
    const raw_book = {
      author_name: ['John Doe'],
      title: 'book of books',
      cover_edition_key: '112H',
      key: 111
    }
    const book = compose(
      omit(['cover_edition_key']),
      assoc('cover_image', actions.getCoverImage(raw_book.cover_edition_key))
    )(raw_book)

    nock(API_HOST)
      .get('/search.json?q=hello')
      .reply(200, {docs: [raw_book]})

    const expectedActions = [
      {type: 'SEARCH_BOOKS_REQUEST', searchText: 'hello'},
      {type: 'RECEIVE_BOOKS', books: [book]}
    ]

    const store = mockStore({ books: [] })

    return store.dispatch(actions.searchBooks('hello'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('should create an action to add a book', () => {
    const book = {addDate: Date.now()}
    const expectedAction = {
      type: 'ADD_BOOK',
      book
    }

    expect(actions.addBook(book)).toEqual(expectedAction)
  })

  it('should generate a cover image', () => {
    const coverEditionKeyArray = [123, undefined]
    const url = (coverEditionKey) =>
      `https://covers.openlibrary.org/b/olid/${coverEditionKey}-M.jpg`
    expect(actions.getCoverImage(coverEditionKeyArray[0]))
      .toEqual(url(coverEditionKeyArray[0]))
    expect(actions.getCoverImage(coverEditionKeyArray[1]))
      .toEqual('http://placehold.it/180x298?text=No Image Found')
  })
})

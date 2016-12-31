import React from 'react'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import { assoc, compose, omit } from 'ramda'

import { Header, handleSearch } from '../../src/components/Header'
import { API_HOST } from '../../src/api'
import { getCoverImage } from '../../src/actions/books'

import renderer from 'react-test-renderer'

const mockStore = configureMockStore([thunk])

describe('<Header /> component', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should render <Header /> correctly', () => {
    const tree = renderer.create(
      <Header search={{searchText: 'hello'}} mybooks={{books: []}}/>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should handleSearch', () => {
    const raw_book = {
      author_name: ['John Doe'],
      title: 'book of books',
      cover_edition_key: '112H',
      key: 111
    }

    const book = compose(
      omit(['cover_edition_key']),
      assoc('cover_image', getCoverImage(raw_book.cover_edition_key))
    )(raw_book)

    nock(API_HOST)
      .get('/search.json?q=hello')
      .reply(200, raw_book)

    const expectedActions = [
      {type: 'SEARCH_BOOKS_REQUEST', searchText: 'hello'},
      {type: 'SEARCH_WILL_SEARCH', searchText: 'hello'}
    ]

    const store = mockStore({ books: [] })
    const props = {
      dispatch: store.dispatch,
      search: {searchText: 'hello'}
    }

    handleSearch(props)
    expect(store.getActions()).toEqual(expectedActions)
  })
})

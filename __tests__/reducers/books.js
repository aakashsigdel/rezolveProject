import reducer, { initialState } from '../../src/reducers/books'

describe('books reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle SEARCH_BOOKS_REQUEST', () => {
    expect(
      reducer(initialState, { type: 'SEARCH_BOOKS_REQUEST' })
    ).toEqual({
      books: [],
      error: null,
      isLoading: true,
    })
  })

  it('should handle RECEIVE_BOOKS', () => {
    expect(
      reducer(initialState, {
        type: 'RECEIVE_BOOKS',
        books: [{title: 'hello'}]
      })
    ).toEqual({
      books: [{title: 'hello'}],
      isLoading: false,
      error: null
    })
  })

  it('should handle SEARCH_BOOKS_ERROR', () => {
    const error = {type: 'json_error', msg: 'unable to parse response'}
    expect(reducer(initialState, {
      type: 'SEARCH_BOOKS_ERROR',
      error
    })).toEqual({
      ...initialState,
      error
    })
  })

  it('should handle CLEAR_ERROR', () => {
    expect(reducer(initialState, {
      type: 'CLEAR_ERROR'
    })).toEqual(initialState)
  })
})

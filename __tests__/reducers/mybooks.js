import reducer, { initialState } from '../../src/reducers/mybooks'

describe('mybooks reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle ADD_BOOK', () => {
    expect(
      reducer(initialState, {
        type: 'ADD_BOOK',
        book: {title: 'hello'}
      })
    ).toEqual({
      isLoading: false,
      error: null,
      books: [{title: 'hello'}]
    })
  })

  it('shoudl handle REMOVE_BOOK', () => {
    expect(
      reducer({...initialState, books: [{key: 11, title: 'hello'}]}, {
        type: 'REMOVE_BOOK',
        key: 11
      })
    ).toEqual({isLoading: false, error: null, books: []})
  })
})

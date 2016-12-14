import reducer, { initialState } from '../../src/reducers/search'

describe('search reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle SEARCH_CHANGE_TEXT', () => {
    expect(
      reducer(initialState, {
        type: 'SEARCH_CHANGE_TEXT',
        searchText: 'hello'
      })).toEqual({
        searchText: 'hello',
        recentSearches: []
      })
  })

  it('should handle SEARCH_WILL_SEARCH', () => {
    expect(reducer(initialState, {
      type: 'SEARCH_WILL_SEARCH',
      searchText: 'hello'
    })).toEqual({
      searchText: '',
      recentSearches: ['hello']
    })
  })
})

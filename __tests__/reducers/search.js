import reducer from '../../src/reducers/search'

describe('search reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({searchText: ''})
  })

  it('should handle SEARCH_CHANGE_TEXT', () => {
    expect(
      reducer({}, {
        type: 'SEARCH_CHANGE_TEXT',
        searchText: 'hello'
      })).toEqual({
        searchText: 'hello'
      })
  })
})

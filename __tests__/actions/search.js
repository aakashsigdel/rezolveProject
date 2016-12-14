import { searchChangeText, searchWillSearch  } from '../../src/actions/search'

describe('search actions', () => {
  it('should create an action on search text change', () => {
    const searchText = 'hello'
    const expectedAction = {
      type: 'SEARCH_CHANGE_TEXT',
      searchText
    }

    expect(searchChangeText(searchText)).toEqual(expectedAction)
  })

  it('should create an action to handle recent changes', () => {
    const searchText = 'hello'
    const expectedAction = {
      type: 'SEARCH_WILL_SEARCH',
      searchText
    }

    expect(searchWillSearch(searchText)).toEqual(expectedAction)
  })
})

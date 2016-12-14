import { searchChangeText  } from '../../src/actions/search'

it('should create an action on search text change', () => {
  const searchText = 'hello'
  const expectedAction = {
    type: 'SEARCH_CHANGE_TEXT',
    searchText
  }

  expect(searchChangeText(searchText)).toEqual(expectedAction)
})

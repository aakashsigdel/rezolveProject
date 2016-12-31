import * as actions from '../../src/actions/error'

describe('error actions', () => {
  it('should create SEARCH_BOOKS_ERROR action', () => {
    const expectedAction = {
      type: 'SEARCH_BOOKS_ERROR',
      error: null
    }

    expect(actions.searchBooksError(null)).toEqual(expectedAction)
  })

  it('should create CLEAR_ERROR action', () => {
    const expectedAction = {
      type: 'CLEAR_ERROR'
    }

    expect(actions.clearError()).toEqual(expectedAction)
  })
})

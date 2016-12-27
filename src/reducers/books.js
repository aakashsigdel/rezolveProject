export const initialState = {
  isLoading: false,
  error: null,
  books: []
}

const books = (state = initialState, action) => {
  switch(action.type) {
    case 'SEARCH_BOOKS_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'RECEIVE_BOOKS':
      return {
        ...state,
        books: action.books,
        isLoading: false
      }
    case 'SEARCH_BOOKS_ERROR':
      return {
        ...state,
        error: action.error
      }
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null
      }
    default:
      return state
  }

  return state
}

export default books

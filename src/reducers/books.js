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
        books: [],
        isLoading: true
      }
    case 'RECEIVE_BOOKS':
      return {
        ...state,
        books: action.books,
        isLoading: false
      }
    default:
      return state
  }

  return state
}

export default books

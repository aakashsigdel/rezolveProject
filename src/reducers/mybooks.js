export const initialState = {
  isLoading: false,
  error: null,
  books: []
}

const mybooks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: [
          ...state.books,
          action.book
        ]
      }
    case 'REMOVE_BOOK':
      return {
        ...state,
        books: state.books.filter(book => book.key !== action.key)
      }
    default:
      return state
  }

  return state
}

export default mybooks

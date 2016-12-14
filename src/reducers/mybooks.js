export const initialState = {
  isLoading: false,
  error: null,
  books: []
}

const mybooks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK': {
      const booksInStore = state.books.filter(book => book.key === action.book.key)
      if (booksInStore.length === 0) {
        return {
          ...state,
          books: [
            ...state.books,
            action.book
          ]
        }
      } else {
        return state
      }
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

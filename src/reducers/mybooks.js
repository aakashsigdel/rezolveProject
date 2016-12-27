import { __, append, evolve } from 'ramda'
import { fromNullable } from '../utils'

export const initialState = {
  isLoading: false,
  error: null,
  books: []
}

const findBookInStore = (books, book) =>
  fromNullable(books.find(b => b.key === book.key))

const mybooks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return findBookInStore(state.books, action.book)
        .fold(
          () => evolve(__, state)({
            books: append(action.book)
          }),
          () => state
        )
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

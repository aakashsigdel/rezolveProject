import { combineReducers } from 'redux'
import books from './books'
import mybooks from './mybooks'
import search from './search'

const rootReducer = (state, action) => state

export default combineReducers({
  books,
  mybooks,
  search
})

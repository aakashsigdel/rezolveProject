import { combineReducers } from 'redux'
import books from './books'
import mybooks from './mybooks'

const rootReducer = (state, action) => state

export default combineReducers({
  books,
  mybooks
})

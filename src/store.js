import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)))

store.subscribe(() => {
  saveState({
    mybooks: store.getState().mybooks
  })
})

export default store

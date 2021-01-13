import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import createRootReducer from './modules'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  createRootReducer,
  composeEnhancer(applyMiddleware(thunk))
)

export default store
import rootReducer from '../state/reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import initialState from '../state/initialState'

const enhancers = []
const devToolsExtension = window.devToolsExtension

if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension())
}

export default () => {
  return createStore(rootReducer,
    initialState,
    compose(applyMiddleware(thunk), ...enhancers)
  )
}

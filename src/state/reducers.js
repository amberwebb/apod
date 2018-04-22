import { combineReducers } from 'redux'
import appReducer from './App/reducer'
import apodReducer from './Apod/reducer'

const rootReducer = combineReducers({
  app: appReducer,
  apod: apodReducer
})

export default rootReducer

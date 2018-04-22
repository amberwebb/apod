import initialState from '../initialState'
import {
  APP_LOADING_COMPLETE,
  APP_LOADING_ERROR_MESSAGE,
  APP_LOADING_START
} from './constants'

const appReducer = (state = initialState['app'], action) => {
  switch (action.type) {
    case APP_LOADING_START:
      return {
        ...state,
        loading: true,
      }
    case APP_LOADING_COMPLETE:
      return {
        ...state,
        loading: false,
      }
    case APP_LOADING_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.errorMessage
      }
    default:
      return state
  }
}

export default appReducer

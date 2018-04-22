import initialState from '../initialState'
import {
  APOD_ITEM_DATA,
} from './constants'

const apodReducer = (state = initialState['apod'], action) => {
  switch (action.type) {
    case APOD_ITEM_DATA:
      return {
        ...state,
        item: action.data
      }
    default:
      return state
  }
}

export default apodReducer

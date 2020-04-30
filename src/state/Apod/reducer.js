import initialState from '../initialState';
import { APOD_ITEM_DATA } from './constants';

export default function apodReducer(state = initialState['apod'], action) {
  switch (action.type) {
    case APOD_ITEM_DATA:
      return {
        ...state,
        item: action.data,
      }
    default:
      return state;
  }
}

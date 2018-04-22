import axios from 'axios'
import {
  APP_LOADING_COMPLETE,
  APP_LOADING_ERROR_MESSAGE,
  APP_LOADING_START,
  NASA_APOD_API,
  NASA_APOD_API_KEY
} from './constants'
import {
  APOD_ITEM_DATA
} from '../Apod/constants'

const loadingStart = {
  type: APP_LOADING_START
}

const loadingComplete = {
  type: APP_LOADING_COMPLETE
}

const loadingErrored = (error) => {
  return {
    type: APP_LOADING_ERROR_MESSAGE,
    errorMessage: error
  }
}

const loadApodItem = () => {
  return (dispatch, getState) => {
    dispatch(loadingStart)
    axios.get(`${NASA_APOD_API}${NASA_APOD_API_KEY}`).then((response) => {
      const data = response.data
      dispatch({
        type: APOD_ITEM_DATA,
        data
      })
      dispatch(loadingComplete)
    })
    .catch((error) => {
      dispatch(loadingComplete)
      dispatch(loadingErrored(error.response.data.error.message))
    })
  }
}

export {
  loadApodItem
}

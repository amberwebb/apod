import { connect } from 'react-redux'
import App from './App'

import {
  loadApodItem
} from '../state/App/actions'
import {
  selectErrorMessage,
  selectIsLoading
} from '../state/App/selectors'

const mapDispatchToProps = {
  loadApodItem
}

const mapStateToProps = (state) => (
  {
    errorMessage: selectErrorMessage(state),
    isLoading: selectIsLoading(state)
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App)

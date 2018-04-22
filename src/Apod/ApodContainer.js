import { connect } from 'react-redux'
import Apod from './Apod'

import {
  selectApodCopyright,
  selectApodExplanation,
  selectApodImageLink,
  selectApodTitle
} from '../state/Apod/selectors'

const mapDispatchToProps = {}

const mapStateToProps = (state) => (
  {
    apodCopyright: selectApodCopyright(state) || '',
    apodExplanation: selectApodExplanation(state) || '',
    apodImageLink: selectApodImageLink(state) || '',
    apodTitle: selectApodTitle(state) || ''
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Apod)

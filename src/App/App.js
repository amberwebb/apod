import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ApodContainer from '../Apod/ApodContainer'
import moment from 'moment'
import './App.css'
import { APP_TITLE } from './constants'

class App extends Component {
  static propTypes = {
    errorMessage: PropTypes.string,
    isLoading: PropTypes.bool,
    loadApodItem: PropTypes.func.isRequired
  }

  componentWillMount () {
    this.props.loadApodItem()
  }

  componentDidMount () {
    const { errorMessage } = this.props

    if (!this.errorMessage) {
      this.renderApp()
    } else {
      return (
        <p>{errorMessage}</p>
      )
    }
  }

  renderApp = () => {
    return (
      <div className='App'>
        <header className='App-header'>
          {this.renderHeaderAndDate()}
        </header>
        <div className='App-intro'>
          <ApodContainer />
        </div>
      </div>
    )
  }

  renderHeaderAndDate = () => {
    const today = moment().format('MMMM Do YYYY')
    return (
      <span>
        <h1>{APP_TITLE}</h1>
        <h3>{today}</h3>
      </span>
    )
  }

  render () {
    const { errorMessage, isLoading } = this.props

    if (!errorMessage && !isLoading) {
      return (
        this.renderApp()
      )
    } else if (isLoading) {
      return (
        <p>Loading...</p>
      )
    } else if (errorMessage) {
      return (
        <p style={{'color': 'red', 'fontWeight': 'bold'}}>
          {errorMessage}
        </p>
      )
    } else {
      return null
    }
  }
}

export default App

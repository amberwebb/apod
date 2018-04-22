import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Apod.css'

class Apod extends Component {
  static propTypes = {
    apodCopyright: PropTypes.string.isRequired,
    apodExplanation: PropTypes.string.isRequired,
    apodImageLink: PropTypes.string.isRequired,
    apodTitle: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      displayInfo: false
    }
  }

  displayInfo = () => {
    this.setState({displayInfo: !this.state.displayInfo})
  }

  render () {
    const {
      apodCopyright,
      apodExplanation,
      apodImageLink,
      apodTitle
    } = this.props

    const { displayInfo } = this.state

    return (
      <div className='Apod'>
        <h2>
          {apodTitle}
          <span className='Apod-infoButton'>
            <button onClick={this.displayInfo}>
              {displayInfo ? 'Less...' : 'More...'}
            </button>
          </span>
        </h2>
        {displayInfo &&
          <div className='Apod-intro'>
            <p>{apodExplanation}</p>
            <p><small>&copy; {apodCopyright}</small></p>
          </div>
        }
        <img
          src={apodImageLink}
          alt={apodTitle}
        />
      </div>
    )
  }
}

export default Apod

import React, { useEffect } from 'react';
import ApodContainer from '../Apod/ApodContainer';
import './App.css';
import { APP_TITLE } from './constants';

export default function App(props){
  const {
    errorMessage,
    isLoading,
    loadApodItem,
  } = props;

  useEffect(() => {
    loadApodItem()
  }, [loadApodItem]);

  function renderApp() {
    return (
      <div className='App'>
        <header className='App-header'>
          {renderHeaderAndDate()}
        </header>
        <div className='App-intro'>
          <ApodContainer />
        </div>
      </div>
    )
  }

  function renderHeaderAndDate() {
    const today = new Date().toLocaleDateString("en-US");
    return (
      <span>
        <h1>{APP_TITLE}</h1>
        <h3>{today}</h3>
      </span>
    )
  }

  if (!errorMessage && !isLoading) {
    return (
      renderApp()
    );
  } else if (isLoading) {
    return (
      <p>Loading...</p>
    );
  } else if (errorMessage) {
    return (
      <p style={{'color': 'red', 'fontWeight': 'bold'}}>
        {errorMessage}
      </p>
    );
  } else {
    return null;
  }
}

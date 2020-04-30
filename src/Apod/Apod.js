import React, { useState } from 'react';
import './Apod.css';

export default function Apod(props) {
  const {
    apodCopyright,
    apodExplanation,
    apodImageLink,
    apodTitle,
  } = props;
  const [displayInfo, setDisplayInfo] = useState(false);

  function displayPicInfo() {
    setDisplayInfo(!displayInfo);
  }

  return (
    <div className='Apod'>
      <h2>
        {apodTitle}
        <span className='Apod-infoButton'>
          <button onClick={displayPicInfo}>
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
  );
}

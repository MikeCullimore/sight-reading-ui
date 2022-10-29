// import React from 'react';
import scale from './c-major-scale-right-hand.svg';
import './ScaleExercise.css';

// todo: extract props (src, alt, instructions).

function ScaleExercise() {
  return (
    <div className="scale-exercise">
      <div className="sheet-music-container">
        <img src={scale} className="sheet-music" alt="C major scale (right hand)" />
      </div>
      <div className='instructions'>
        <p>Play a C major scale with your right hand.</p>
      </div>
    </div>
  );
}

export default ScaleExercise;

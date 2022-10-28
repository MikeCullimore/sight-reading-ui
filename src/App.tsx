import React from 'react';
import scale from './c-major-scale-right-hand.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sheet-music">
        <img src={scale} alt="C major scale (right hand)" />
      </div>
      <div className='instructions'>
        <p>Play a C major scale with your right hand.</p>
      </div>
    </div>
  );
}

export default App;

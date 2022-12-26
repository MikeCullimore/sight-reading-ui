import './ScaleExercise.css';
import { getRandomScaleProps } from './scales';
import { useState } from 'react';

export interface ScaleExerciseProps {
    imagePath: string;
    imageDescription: string;
    instructions: string;
}

function ScaleExercise() {
  const [scale, setScale] = useState(getRandomScaleProps());

  return (
    <div className="scale-exercise">
      <div className="sheet-music-container">
        <img className="sheet-music" src={scale.imagePath} alt={scale.imageDescription} />
      </div>
      <div className='instructions'>
        <p>{scale.instructions}</p>
      </div>
      <div className="inputs">
        <button onClick={() => setScale(getRandomScaleProps())}>Next</button>
      </div>
    </div>
  );
}

export default ScaleExercise;

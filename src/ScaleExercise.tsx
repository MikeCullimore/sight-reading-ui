import './ScaleExercise.css';
import { getRandomScaleProps } from './scales';
import { useState } from 'react';

// TODO: add grade?
export interface ScaleExerciseState {
    image: string;
    description: string;
}

function ScaleExercise() {
  const [scale, setScale] = useState(getRandomScaleProps());

  return (
    <div className="scale-exercise">
      <div className="description">{scale.description}</div>
      <div className="sheet-music-container">
        <img className="sheet-music" src={scale.image} alt={scale.description} />
      </div>
      <div className="inputs">
        <button className="next-button" onClick={() => setScale(getRandomScaleProps())}>Next</button>
      </div>
    </div>
  );
}

export default ScaleExercise;

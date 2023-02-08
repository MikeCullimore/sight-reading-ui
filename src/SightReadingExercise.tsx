import './SightReadingExercise.css';
import { generateExercise, Grade } from './grades';
import { useState } from 'react';

// TODO: select grade via drop-down.
const grade = Grade.Two;

export interface SightReadingExerciseState {
    image: string;
}

function SightReadingExercise() {
  const [exercise, setExercise] = useState(generateExercise(grade));

  return (
    <div className="scale-exercise">
      <div className="sheet-music-container">
        <img className="sheet-music" src={exercise.image} alt="Sight reading exercise" />
      </div>
      <div className="inputs">
        <button className="next-button" onClick={() => setExercise(generateExercise(grade))}>Next</button>
      </div>
    </div>
  );
}

export default SightReadingExercise;

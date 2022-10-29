import './ScaleExercise.css';

interface ScaleExerciseProps {
    imagePath: string;
    imageDescription: string;
    instructions: string;
}

function ScaleExercise(props: ScaleExerciseProps) {
  return (
    <div className="scale-exercise">
      <div className="sheet-music-container">
        <img className="sheet-music" src={props.imagePath} alt={props.imageDescription} />
      </div>
      <div className='instructions'>
        <p>{props.instructions}</p>
      </div>
    </div>
  );
}

export default ScaleExercise;

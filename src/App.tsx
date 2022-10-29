import './App.css';
import ScaleExercise from './ScaleExercise';
import scale from './c-major-scale-right-hand.svg';

function App() {
  return (
    <div className="App">
      <ScaleExercise
        imagePath={scale}
        imageDescription="C major scale (right hand)"
        instructions="Play a C major scale with your right hand."
      />
    </div>
  );
}

export default App;

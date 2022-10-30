import './App.css';
import ScaleExercise from './ScaleExercise';
import { getRandomScaleProps } from './scales';

function App() {
  return (
    <div className="App">
      <ScaleExercise {...getRandomScaleProps()}/>
    </div>
  );
}

export default App;

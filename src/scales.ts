import cMajorRightImagePath from './c-major-scale-right-hand.svg';
import cMajorLeftImagePath from './c-major-scale-left-hand.svg';
import { ScaleExerciseProps } from './ScaleExercise';

const cMajorRight: ScaleExerciseProps = {
    imagePath: cMajorRightImagePath,
    imageDescription: "C major scale (right hand)",
    instructions: "Play a C major scale with your right hand."
};

const cMajorLeft: ScaleExerciseProps = {
    imagePath: cMajorLeftImagePath,
    imageDescription: "C major scale (left hand)",
    instructions: "Play a C major scale with your left hand."
};

const scales = [cMajorRight, cMajorLeft];

export function getRandomScaleProps() {
    return scales[Math.floor(Math.random()*scales.length)];
}


import imageCMajorRight from './scales/c-major-scale-right-hand.svg';
import imageCMajorLeft from './scales/c-major-scale-left-hand.svg';
import { ScaleExerciseState } from './ScaleExercise';

const cMajorRight: ScaleExerciseState = {
    image: imageCMajorRight,
    description: "C major scale (right hand)"
};

const cMajorLeft: ScaleExerciseState = {
    image: imageCMajorLeft,
    description: "C major scale (left hand)"
};

const scales = [cMajorRight, cMajorLeft];

export function getRandomScaleProps() {
    return scales[Math.floor(Math.random()*scales.length)];
}


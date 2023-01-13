import imageCMajorRight from './scales/c-major-scale-right-hand.svg';
import imageCMajorLeft from './scales/c-major-scale-left-hand.svg';
import imageGMajorTogether from './scales/g-major-two-octaves-hands-together.svg';
import { ScaleExerciseState } from './ScaleExercise';

const cMajorRight: ScaleExerciseState = {
    image: imageCMajorRight,
    description: "C major scale (right hand)"
};

const cMajorLeft: ScaleExerciseState = {
    image: imageCMajorLeft,
    description: "C major scale (left hand)"
};

const gMajorTogether: ScaleExerciseState = {
    image: imageGMajorTogether,
    description: "G major scale (hands together)"
};

const scales = [cMajorRight, cMajorLeft, gMajorTogether];

export const getRandomScaleProps = (): ScaleExerciseState => {
    return scales[Math.floor(Math.random()*scales.length)];
}


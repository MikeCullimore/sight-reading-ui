// import * as fs from 'node:fs';
// TODO: remove when image no longer used.
import imageGMajorTogether from './scales/g-major-two-octaves-hands-together.svg';
import { SightReadingExerciseState } from "./SightReadingExercise"

export enum Grade {
    One = 1, // So that numeric values will match (default is 0).
    Two,
    // Three,
    // Four,
    // Five,
    // Six,
    // Seven,
    // Eight
}

// todo: add remaining keys.
enum Key {
    CMajor,
    GMajor,
    FMajor,
    AMinor,
    DMinor,
    DMajor,
    EMinor,
    GMinor
}

enum ScaleType {
    Natural,
    Harmonic,
    Melodic
}

enum TimeSignature {
    FourFour,
    ThreeFour,
    TwoFour,
    ThreeEight,
    SixEight,
    NineEight,
    FiveEight,
    FiveFour,
    SevenEight,
    SevenFour,
    TwelveEight
}

enum NoteValue {
    SemiQuaver,
    Quaver,
    Crotchet,
    DottedCrotchet,
    Minim,
    DottedMinim,
    SemiBreve
}

enum RestValue {
    SemiQuaver,
    Quaver,
    Crotchet,
    Minim,
    SemiBreve
}

enum Dynamics {
    Piano,
    MezzoPiano,
    MezzoForte,
    Forte,
    Crescendo,
    Diminuendo,
    Pianissimo,
    Fortissimo
}

enum Descriptors {
    Andante,
    Allegretto,
    Lively
}

interface OtherFeatures {
    handsTogether: boolean
    fiveFingerPosition: boolean
    ties: boolean
}

// todo: add remaining parameters from ABRSM book e.g. tempo markings and descriptions.
// What else to capture? Note range, largest interval, ...?
interface GradeParameters {
    keys: Key[]
    timeSignatures: TimeSignature[]
    noteValues: NoteValue[]
    restValues: RestValue[]
    dynamics: Dynamics[]
    otherFeatures: OtherFeatures
}

const gradeOne: GradeParameters = {
    keys: [Key.CMajor, Key.GMajor, Key.FMajor, Key.AMinor, Key.DMinor],
    timeSignatures: [TimeSignature.FourFour, TimeSignature.ThreeFour, TimeSignature.TwoFour],
    noteValues: [NoteValue.Quaver, NoteValue.Crotchet, NoteValue.Minim, NoteValue.DottedMinim],
    restValues: [RestValue.Crotchet, RestValue.Minim, RestValue.SemiBreve],
    dynamics: [Dynamics.Piano, Dynamics.MezzoPiano, Dynamics.MezzoForte, Dynamics.Forte, Dynamics.Crescendo, Dynamics.Diminuendo],
    otherFeatures: {
        handsTogether: false,
        fiveFingerPosition: true,
        ties: false
    }
}

const gradeTwo: GradeParameters = {
    keys: [...gradeOne.keys, Key.DMajor, Key.EMinor, Key.GMinor],
    timeSignatures: gradeOne.timeSignatures,
    noteValues: [...gradeOne.noteValues, NoteValue.DottedCrotchet, NoteValue.SemiBreve],
    restValues: gradeOne.restValues,
    dynamics: [...gradeOne.dynamics, Dynamics.Pianissimo],
    otherFeatures: {
        handsTogether: true,
        fiveFingerPosition: false,
        ties: true
    }
}

const gradeParametersLookup: Record<Grade, GradeParameters> = {
    1: gradeOne,
    2: gradeTwo
}

function chooseRandom<T>(array: Array<T>): T {
    return array[Math.floor(Math.random()*array.length)];
}

// TODO!
export const generateExercise = (grade: Grade): SightReadingExerciseState => {
    // const parameters = gradeParametersLookup[grade];
    
    // Choose random key from options.
    // TODO: get notes in the scale. Use Tonal?
    // TODO: separate rhythm and melody generators.
    // const key = chooseRandom(parameters.keys);
    // console.log(`key: ${Key[key]}`);

    /**
     * TODO
     * Define Lilypond script contents (hard code for now).
     * Save to file. Error importing node:fs ... need to handle in API?
     * Invoke Lilypond.
     * Return SVG.
     */
    // const fileContents = "Hello World!";
    // const filename = "tmp.ly";
    // fs.writeFileSync(filename, fileContents);
    // console.log(`Successfully written to file ${filename}`);

    const exercise: SightReadingExerciseState = {
        image: imageGMajorTogether
    };

    return exercise;
}

if (require.main === module) {
    generateExercise(Grade.Two);
}

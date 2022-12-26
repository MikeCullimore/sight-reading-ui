enum Grade {
    One = 1, // So that numeric values will match (default is 0).
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight
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

// todo: add remaining parameters from ABRSM book e.g. dynamics, tempo markings and descriptions.
// What else to capture? Note range, largest interval, ...?
interface GradeParameters {
    keys: Key[]
    timeSignatures: TimeSignature[]
    noteValues: NoteValue[]
    restValues: RestValue[]
}

// todo: function to generate exercises with these parameters.
interface ExerciseParameters {
    key: Key
    timeSignature: TimeSignature
    noteValues: NoteValue[]
    restValues: RestValue[]
}

const gradeOne: GradeParameters = {
    keys: [Key.CMajor, Key.GMajor, Key.FMajor, Key.AMinor, Key.DMinor],
    timeSignatures: [TimeSignature.FourFour, TimeSignature.ThreeFour, TimeSignature.TwoFour],
    noteValues: [NoteValue.Quaver, NoteValue.Crotchet, NoteValue.Minim, NoteValue.DottedMinim],
    restValues: [RestValue.Crotchet, RestValue.Minim, RestValue.SemiBreve]
}

const gradeTwo: GradeParameters = {
    keys: [...gradeOne.keys, Key.DMajor, Key.EMinor, Key.GMinor],
    timeSignatures: gradeOne.timeSignatures,
    noteValues: [...gradeOne.noteValues, NoteValue.DottedCrotchet, NoteValue.Minim],
    restValues: gradeOne.restValues,
}

// Just to satisfy record so there are entries for every grade.
const tmpEmptyGrade: GradeParameters = {
    keys: [],
    timeSignatures: [],
    noteValues: [],
    restValues: []
}

const gradeParametersLookup: Record<Grade, GradeParameters> = {
    1: gradeOne,
    2: gradeTwo,
    3: tmpEmptyGrade,
    4: tmpEmptyGrade,
    5: tmpEmptyGrade,
    6: tmpEmptyGrade,
    7: tmpEmptyGrade,
    8: tmpEmptyGrade
}

function chooseRandom<T>(array: Array<T>): T {
    return array[Math.floor(Math.random()*array.length)];
}

function getExerciseParameters(grade: Grade): ExerciseParameters {
    const gradeParameters = gradeParametersLookup[grade];
    return {
        key: chooseRandom(gradeParameters.keys),
        timeSignature: chooseRandom(gradeParameters.timeSignatures),
        noteValues: gradeParameters.noteValues,
        restValues: gradeParameters.restValues
    }
}

export function generateExercise(grade: Grade) {
    const parameters = getExerciseParameters(grade);

}

// todo: make this work!
// Compiled via `tsc grades.ts` which is then embedded in debugging.html.
// document.body.textContent = JSON.stringify(getExerciseParameters(Grade.One));
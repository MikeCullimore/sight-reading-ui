enum Grade {
    One = 1, // So that numeric values will match.
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

// todo: add remaining parameters from ABRSM book e.g. note and rest values, dynamics, tempo
// markings and descriptions. What else to capture? Note range, largest interval, ...?
export interface GradeParameters {
    keys: Key[]
    timeSignatures: TimeSignature[]
}

// todo: function to generate exercises with these parameters.
export interface ExerciseParameters {
    key: Key
    timeSignature: TimeSignature
}

const gradeOne: GradeParameters = {
    keys: [Key.CMajor, Key.GMajor, Key.FMajor, Key.AMinor, Key.DMinor],
    timeSignatures: [TimeSignature.FourFour, TimeSignature.ThreeFour, TimeSignature.TwoFour]
}

const gradeTwo: GradeParameters = {
    keys: [...gradeOne.keys, Key.DMajor, Key.EMinor, Key.GMinor],
    timeSignatures: gradeOne.timeSignatures,
}

// Just to satisfy record so there are entries for every grade.
const tmpEmptyGrade: GradeParameters = {
    keys: [],
    timeSignatures: []
}

export const gradeParametersLookup: Record<Grade, GradeParameters> = {
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

export function getExerciseParameters(grade: Grade): ExerciseParameters {
    const gradeParameters = gradeParametersLookup[grade];
    return {
        key: chooseRandom(gradeParameters.keys),
        timeSignature: chooseRandom(gradeParameters.timeSignatures)
    }
}
enum Grade {
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

// todo: add remaining parameters from ABRSM book e.g. dynamics, tempo markings and descriptions.
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
        ...gradeOne.otherFeatures,
        handsTogether: true,
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

// todo!
export function generateExercise(grade: Grade) {
    const parameters = gradeParametersLookup[grade];
    console.log(JSON.stringify(parameters));
}

if (require.main === module) {
    generateExercise(Grade.Two);
}

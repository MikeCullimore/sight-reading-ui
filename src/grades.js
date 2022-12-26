"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var Grade;
(function (Grade) {
    Grade[Grade["One"] = 1] = "One";
    Grade[Grade["Two"] = 2] = "Two";
    Grade[Grade["Three"] = 3] = "Three";
    Grade[Grade["Four"] = 4] = "Four";
    Grade[Grade["Five"] = 5] = "Five";
    Grade[Grade["Six"] = 6] = "Six";
    Grade[Grade["Seven"] = 7] = "Seven";
    Grade[Grade["Eight"] = 8] = "Eight";
})(Grade || (Grade = {}));
// todo: add remaining keys.
var Key;
(function (Key) {
    Key[Key["CMajor"] = 0] = "CMajor";
    Key[Key["GMajor"] = 1] = "GMajor";
    Key[Key["FMajor"] = 2] = "FMajor";
    Key[Key["AMinor"] = 3] = "AMinor";
    Key[Key["DMinor"] = 4] = "DMinor";
    Key[Key["DMajor"] = 5] = "DMajor";
    Key[Key["EMinor"] = 6] = "EMinor";
    Key[Key["GMinor"] = 7] = "GMinor";
})(Key || (Key = {}));
var TimeSignature;
(function (TimeSignature) {
    TimeSignature[TimeSignature["FourFour"] = 0] = "FourFour";
    TimeSignature[TimeSignature["ThreeFour"] = 1] = "ThreeFour";
    TimeSignature[TimeSignature["TwoFour"] = 2] = "TwoFour";
    TimeSignature[TimeSignature["ThreeEight"] = 3] = "ThreeEight";
    TimeSignature[TimeSignature["SixEight"] = 4] = "SixEight";
    TimeSignature[TimeSignature["NineEight"] = 5] = "NineEight";
    TimeSignature[TimeSignature["FiveEight"] = 6] = "FiveEight";
    TimeSignature[TimeSignature["FiveFour"] = 7] = "FiveFour";
    TimeSignature[TimeSignature["SevenEight"] = 8] = "SevenEight";
    TimeSignature[TimeSignature["SevenFour"] = 9] = "SevenFour";
    TimeSignature[TimeSignature["TwelveEight"] = 10] = "TwelveEight";
})(TimeSignature || (TimeSignature = {}));
var NoteValue;
(function (NoteValue) {
    NoteValue[NoteValue["SemiQuaver"] = 0] = "SemiQuaver";
    NoteValue[NoteValue["Quaver"] = 1] = "Quaver";
    NoteValue[NoteValue["Crotchet"] = 2] = "Crotchet";
    NoteValue[NoteValue["DottedCrotchet"] = 3] = "DottedCrotchet";
    NoteValue[NoteValue["Minim"] = 4] = "Minim";
    NoteValue[NoteValue["DottedMinim"] = 5] = "DottedMinim";
    NoteValue[NoteValue["SemiBreve"] = 6] = "SemiBreve";
})(NoteValue || (NoteValue = {}));
var gradeOne = {
    keys: [Key.CMajor, Key.GMajor, Key.FMajor, Key.AMinor, Key.DMinor],
    timeSignatures: [TimeSignature.FourFour, TimeSignature.ThreeFour, TimeSignature.TwoFour],
    noteValues: [] // todo
};
var gradeTwo = {
    keys: __spreadArray(__spreadArray([], gradeOne.keys, true), [Key.DMajor, Key.EMinor, Key.GMinor], false),
    timeSignatures: gradeOne.timeSignatures,
    noteValues: [] // todo
};
// Just to satisfy record so there are entries for every grade.
var tmpEmptyGrade = {
    keys: [],
    timeSignatures: [],
    noteValues: [] // todo
};
var gradeParametersLookup = {
    1: gradeOne,
    2: gradeTwo,
    3: tmpEmptyGrade,
    4: tmpEmptyGrade,
    5: tmpEmptyGrade,
    6: tmpEmptyGrade,
    7: tmpEmptyGrade,
    8: tmpEmptyGrade
};
function chooseRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function getExerciseParameters(grade) {
    var gradeParameters = gradeParametersLookup[grade];
    return {
        key: chooseRandom(gradeParameters.keys),
        timeSignature: chooseRandom(gradeParameters.timeSignatures),
        noteValues: []
    };
}
document.body.textContent = JSON.stringify(getExerciseParameters(Grade.One));

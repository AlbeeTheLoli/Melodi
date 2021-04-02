import * as express from 'express'
import { Options, PythonShell } from 'python-shell'

const Router = express.Router()

let note_names = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
]

let key_offsets = {
    'C': 0,
    'C#': 1,
    'D': 2,
    'D#': 3,
    'E': 4,
    'F': 5,
    'F#': 6,
    'G': 7,
    'G#': 8,
    'A': 9,
    'A#': 10,
    'B': 11,
}

let scales = {
    'major': [
        0,
        2,
        4,
        5,
        7,
        9,
        11,
    ],
    'minor': [
        0,
        2,
        3,
        5,
        7,
        8,
        10,
    ],
    'dorian': [
        0,
        2,
        3,
        5,
        7,
        9,
        10,
    ],
    'mixolydian': [
        0,
        2,
        4,
        5,
        7,
        9,
        10,
    ],
    'lydian': [
        0,
        2,
        4,
        6,
        7,
        9,
        11,
    ],
    'phrygian': [
        0,
        1,
        3,
        5,
        7,
        8,
        10,
    ],
    'locrian': [
        0,
        1,
        3,
        5,
        6,
        8,
        10,
    ]
}

Router.get('/create', async (req, res) => {
    let notes = []

    notes = [
        ...createMelody(key_offsets['F'], scales['dorian'], 0, 8, .5, 3),
    ];
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(notes));
});

function createChords(key_offset: number, scale: number[], start: number, duration: number, step = 1, octave = -1000): {midi: number, pitch: string, duration: number, time: number, octave: number}[] {
    let notes = []

    for (let i = start; i < start + duration; i += step) {
        let note = fitToArr(scale, Math.round(Math.random() * 12));
        note += key_offset
        note %= 12;
        if (octave == -1000) {
            octave = Math.round((Math.random() + 3));
        }

        // console.log(note_names[note], note);
        notes.push({
            midi: (note + (octave) * 12) + 1,
            pitch: note_names[note], 
            duration: step,
            time: i,
            octave: octave,
            velocity: .1,
        });

        note += 4;
        note %= 12;
        note = fitToArr(scale, note);

        notes.push({
            midi: (note + (octave) * 12) + 1,
            pitch: note_names[note], 
            duration: step,
            time: i,
            octave: octave,
            velocity: .1,
        });

        // note += 3;
        // note %= 12;
        // note = fitToArr(scale, note);

        // notes.push({
        //     midi: (note + (octave) * 12) + 1,
        //     pitch: note_names[note], 
        //     duration: step,
        //     time: i,
        //     octave: octave,
        //     velocity: .1,
        // });

        // note += 7;
        // note %= 12;
        // note = fitToArr(scale, note);

        // notes.push({
        //     midi: (note + (octave) * 12) + 1,
        //     pitch: note_names[note], 
        //     duration: step,
        //     time: i,
        //     octave: octave,
        //     velocity: .1,
        // });
    }

    return notes;
}

function createMelody(key_offset: number, scale: number[], start: number, duration: number, step = 1, octave = -1000): {midi: number, pitch: string, duration: number, time: number, octave: number}[] {
    let notes = []

    for (let i = start; i < start + duration; i += step) {
        let note = fitToArr(scale, Math.round(Math.random() * 12));
        note += key_offset
        note %= 12;
        if (octave == -1000) {
            octave = Math.round((Math.random() + 3));
        }

        // console.log(note_names[note], note);
        notes.push({
            midi: (note + (octave) * 12) + 1,
            pitch: note_names[note], 
            duration: step,
            time: i,
            octave: octave,
            velocity: Math.random() / 8,
        });
    }

    return notes;
}

function fitToArr(arr: number[], num: number) {
    let found = 0;
    for (const i in arr) {
        if (arr[i] <= num)
            found = arr[i];
        
        if (arr[i] > found)
            break;
    }
    return found;
}

export default Router
import * as express from 'express'

const Router = express.Router()

Router.get('/create', async (req, res) => {
    let notes = []
    let length = 8;

    notes = [
        ...createMelody(0, length, 1 / 4, 4),
        // ...createChords(0, length, 2, 1, 1, false),
        // ...createMelody(0, length, 1 / 2, 1),
    ];
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({length: length, notes: notes}));
});

function createChords(start: number, duration: number, step = 1, octave_ = 0, extensions = 4, random_duration): {pitch: string, duration: number, time: number, octave: number}[] {
    let notes = []

    let marker = 0;
    while (marker < start + duration) {
        let note_duration = step;
        if (random_duration) {
            note_duration = randomInt(1, 4) * step;
        }
        note_duration = Math.min(marker + note_duration, start + duration) - marker;
        let note = {
            time: marker,
            duration: note_duration,
            pitch: randomInt(0, 6),
            octave: octave_
        } 

        marker += note.duration;

        let pitch = note.pitch;
        let octave = note.octave;
        for (let i = 0; i < extensions; i++) {
            console.log({
                ...note,
                pitch: pitch,
                octave: octave
            });
            

            notes.push({
                ...note,
                pitch: pitch,
                octave: i == 1 ? octave + 1 : octave
            });

            if (pitch + 2 >= 7) {                
                octave += 1;
                pitch -= 7;
            }
            pitch = pitch + 2;
        }
    }

    // console.log(notes);
    return notes;
}

function createMelody(start: number, duration: number, step = 1, octave = 0): {pitch: string, duration: number, time: number, octave: number}[] {
    let notes = []

    let marker = 0;
    while (marker < start + duration) {
        let note_duration = randomInt(1, 4) * step;
        note_duration = Math.min(marker + note_duration, start + duration) - marker;
        let note = {
            time: marker,
            duration: note_duration,
            pitch: randomInt(0, 6),
            octave: octave
        }

        console.log(note);
        

        marker += note.duration;

        notes.push(note);
    }

    return notes;
}

let lastrand = -1;
function randomInt(start, end, allowsame = false) {
    let newint = -1
    do {
        newint = Math.round(start + (Math.random() * (end - start)))
    } while (lastrand == newint)
    lastrand = newint; 
    return newint
}

export default Router
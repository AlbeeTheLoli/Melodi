//. browserify main.js -o bundle.js

let starting_parameters = {
    key: 'A',
    scale: 'minor',
    bpm: '160'
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

let mood = findGetParameter('mood');
console.log(mood);
switch (mood) {
    case 'грустный':
        starting_parameters = {
            key: 'A',
            scale: 'minor',
            bpm: '140'
        }
        break;

    case 'веселый':
        starting_parameters = {
            key: 'C',
            scale: 'major',
            bpm: '160'
        }
        break;

    case 'вдохновляющий':
        starting_parameters = {
            key: 'G#',
            scale: 'dorian',
            bpm: '180'
        }
        break;

    case 'спокойный':
        starting_parameters = {
            key: 'F',
            scale: 'major',
            bpm: '100'
        }
        break;
}

console.log(starting_parameters);

//#region contants

const note_names = [
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

const key_offsets = {
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

const scales = {
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

//#endregion

//#region player

const Tone = require('tone');
const { ajax } = require('jquery');
let melody = undefined;

const main_el = document.getElementById('main');
const piano_roll_el = document.getElementById('piano-roll');
const notes_el = document.getElementById('notes');
const notes_bg_el = document.getElementById('notes-bg');

function createNote(note) {
    let el = document.createElement('div');
    el.style.bottom = `calc(var(--piano-note-height) * ${note.midi} + var(--piano-notes-vertical-gap))`;
    el.style.left = `calc(var(--piano-measure-width) * ${note.time} * var(--piano-scale))`;
    el.style.width = `calc(var(--piano-measure-width) * ${note.duration} * var(--piano-scale) - var(--piano-notes-horizontal-gap))`;
    // el.innerHTML = note.name;
    el.style.opacity = `${(note.velocity / 2) + .5}`;
    el.className = 'some-note';

    notes_el.appendChild(el);
}

const synth = new Tone.PolySynth({maxPolyphony: 64}).toDestination();
synth.sync();

const piano = new Tone.Sampler({
    urls: {
        "C0": "client/pages/result/instruments/piano/C0.wav",
        "C1": "client/pages/result/instruments/piano/C1.wav",
        "C2": "client/pages/result/instruments/piano/C2.wav",
        "C3": "client/pages/result/instruments/piano/C3.wav",
        "C4": "client/pages/result/instruments/piano/C4.wav",
        "C5": "client/pages/result/instruments/piano/C5.wav",
    },
    release: 1,
}).toDestination();
piano.sync();

let instrument = piano;
instrument.debug = true;

async function loadMelody() {
    let json = await ajax('http://localhost:8080/melody/create');
    console.log('got melody' , json);
    melody = json;
}

function drawMelody(scale_ = scale, key_ = key) {
    if (key == '' || scale == '') return;
    notes_el.innerHTML = '';
    Tone.Transport.cancel();
    instrument.releaseAll();
    scale = scale_;
    key = key_;
    let length = 0;
    melody.notes.forEach(note_ => {
        if (note_.duration <= 0) return;

        let note = {
            midi: ((scales[scale_][note_.pitch] + key_offsets[key_]) % 12) + (note_.octave - 1) * 12,
            pitch: note_names[(scales[scale_][note_.pitch] + key_offsets[key_]) % 12], 
            duration: note_.duration,
            time: note_.time,
            octave: note_.octave,
            velocity: .1,
        }

        // console.log(note_);
        console.log(note);

        instrument.triggerAttackRelease(`${note.pitch}${note.octave}`, note.duration, note.time, note.velocity);
        createNote(note);

        let end = note.time + note.duration;
        if (length < end) {
            length = end;
        } 
    });

    notes_bg_el.style.width = `calc(var(--piano-measure-width) * ${length} * var(--piano-scale)`;
    let sections_el = document.getElementById('notes-bg-sections');
    sections_el.innerHTML = '';
    for (let i = 0; i < length; i++) {
        sections_el.innerHTML += `
            <div class="section"></div>
        `;
    }
}

//#endregion

document.getElementById('key').value = starting_parameters.key;
document.getElementById('scale').value = starting_parameters.scale;
document.getElementById('bpm').value = starting_parameters.bpm;


let key_input = document.getElementById('key');
let scale_input = document.getElementById('scale');

let scale = scale_input.value;
let key = key_input.value;

key_input.addEventListener('click', async () => {
    document.getElementById('key').value = '';
});

scale_input.addEventListener('click', async () => {
    document.getElementById('scale').value = '';
});

key_input.addEventListener('input', async () => {
    key_input = document.getElementById('key');
    if (key_input.value == undefined) return;
    key = key_input.value;
    drawMelody(scale, key);
});

scale_input.addEventListener('input', async () => {
    scale_input = document.getElementById('scale');
    if (scale_input.value == undefined) return;
    scale = scale_input.value;
    drawMelody(scale, key);
});

async function init() {
    await loadMelody();

    drawMelody();
}

init();

//#region player controls

let playing = false;
let in_piano_roll = true;
document.addEventListener('keypress', e => {
    if (!in_piano_roll) return;
    e.preventDefault();
    if (e.key == ' ') {
        e.preventDefault();
        if (playing) {
            stop();
            playing = false;
        }
        else {
            play();
            playing = true;
        }
    }
});

main_el.addEventListener('mouseenter', () => {
    in_piano_roll = true;
});

main_el.addEventListener('mouseleave', () => {
    in_piano_roll = false;
});

let marker_interval;

async function play() {
    if (melody == undefined) {
        console.log("melody hasn't loaded yet");
        return;
    }

    marker_interval = setInterval(() => {
        // console.log(Tone.Transport.getTicksAtTime());
    }, 100)

    await Tone.start()
	console.log('audio is ready')

    Tone.Transport.setLoopPoints(0, `${melody.length / 2}m`);
    Tone.Transport.loop = true;

    Tone.Transport.bpm.value = parseInt(document.getElementById('bpm').value);
    Tone.Transport.start();
}

async function stop() {
    if (marker_interval) clearInterval(marker_interval);
    console.log('stopping');
    Tone.Transport.stop();
}

async function pause() {
    if (marker_interval) clearInterval(marker_interval);
    console.log('pausing');
    Tone.Transport.pause();
}

//#endregion
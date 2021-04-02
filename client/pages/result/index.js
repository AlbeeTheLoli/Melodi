//. browserify main.js -o bundle.js

const Tone = require('Tone');
const { ajax } = require('jquery');
let melody = undefined;

const main_el = document.getElementById('main');
const piano_roll_el = document.getElementById('piano-roll');
const notes_el = document.getElementById('notes-container');
const notes_bg_el = document.getElementById('notes-bg');

function createNote(note) {
    let el = document.createElement('div');
    el.style.top = `calc(var(--piano-note-height) * ${72 - note.midi} + var(--piano-notes-vertical-gap))`;
    el.style.left = `calc(var(--piano-note-width) * ${note.time} * var(--piano-scale))`;
    el.style.width = `calc(var(--piano-note-width) * ${note.duration} * var(--piano-scale) - var(--piano-notes-horizontal-gap))`;
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

let length = 0;

async function loadMelody() {
    let json = await ajax('http://localhost:3000/melody/create');
    console.log(json);
    melody = json;

    melody.forEach(note => {
        if (note.duration <= 0) return;
        instrument.triggerAttackRelease(`${note.pitch}${note.octave}`, note.duration, note.time, note.velocity);
        createNote(note);

        let end = note.time + note.duration;
        if (length < end) {
            length = end;
        } 
    });

    notes_bg_el.style.width = `calc(var(--piano-note-width) * ${length} * var(--piano-scale) + var(--piano-note-width) + 24px`;
}
loadMelody();

let playing = false;
let in_piano_roll = true;
document.addEventListener('keypress', e => {
    if (!in_piano_roll) return;
    if (e.key == ' ') {
        e.preventDefault(); 
        if (e.ctrlKey) {
            console.log('restarting');
            if (playing) {
                stop();
                playing = false;
            }
            play();
            playing = true;
        } else if (!playing) {
            play();
            playing = true;
        } else {
            pause();
            playing = false;
        }
    }
});

main_el.addEventListener('mouseenter', () => {
    in_piano_roll = true;
});

main_el.addEventListener('mouseleave', () => {
    in_piano_roll = false;
});

async function play() {
    if (melody == undefined) {
        console.log("mellody hasn'y loaded yet");
        return;
    }

    await Tone.start()
	console.log('audio is ready')

    Tone.Transport.bpm.value = document.getElementById('bpm').value;
    Tone.Transport.start();
}

document.getElementById('bpm').addEventListener('input', e => {
    Tone.Transport.bpm.value = e.currentTarget.value;
});

async function stop() {
    console.log('stopping');
    Tone.Transport.stop();
}

async function pause() {
    console.log('pausing');
    Tone.Transport.pause();
}
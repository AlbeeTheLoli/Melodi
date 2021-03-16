(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// //. browserify main.js -o bundle.js

// const Tone = require('Tone');
// const { ajax } = require('jquery');
// let melody = undefined;

// const sampler = new Tone.Sampler({
//     urls: {
// 		"C4": "C4.mp3",
// 		"D#4": "Ds4.mp3",
// 		"F#4": "Fs4.mp3",
// 		"A4": "A4.mp3",
// 	},
// 	release: 1,
// 	baseUrl: "https://tonejs.github.io/audio/salamander/",
// }).toDestination();
// sampler.sync();

// async function loadMelody() {
//     let json = await ajax('http://localhost:3000/melody');
//     console.log(json);
//     melody = json;

//     melody.tracks.forEach(track => {
//         track.notes.forEach(note => {
//             sampler.triggerAttackRelease(note.name, note.duration, note.time, note.velocity);
//         });
//     });
// }
// loadMelody();

// document.getElementById('play-button').addEventListener('click', async () => {
//     if (melody == undefined) {
//         console.log("mellody hasn'y loaded yet");
//         return;
//     }

//     await Tone.start()
// 	console.log('audio is ready')

//     Tone.Transport.bpm = 69;
//     Tone.Transport.start();
// });

// document.getElementById('stop-button').addEventListener('click', () => {
//     console.log('test');
//     Tone.Transport.pause();
// });
},{}]},{},[1]);

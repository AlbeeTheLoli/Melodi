import * as express from 'express'
import * as path from 'path'
import * as fs from 'fs'
import { Midi } from '@tonejs/midi'

const app = express();

import ScriptsRtr from './routes/Scripts'

app.use('/scripts', ScriptsRtr)
app.use('/client', express.static(__dirname + '/client'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/index.html'));
});

app.get('/melody', async (req, res) => {
    // load a midi file in the browser
    const midiData = fs.readFileSync("./Storyseeker.mid")
    const midi = await new Midi(midiData);
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(midi.toJSON()));
});

app.listen(3000, function () {
    console.log('server started');
});
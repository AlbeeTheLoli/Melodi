import * as express from 'express'
import * as path from 'path'
import * as bodyParser from 'body-parser'

import * as fs from 'fs'
// import * as fs from 'fs'
import { Midi } from '@tonejs/midi'

const app = express();

import ScriptsRtr from './routes/Scripts'
import MelodyRtr from './routes/Melody'

try {
    app.use(express.urlencoded({extended: true}))
    // app.use(bodyParser.urlencoded({ extended: false }))
    // app.use(bodyParser.json())

    app.use('/scripts', ScriptsRtr)
    app.use('/melody', MelodyRtr)
    app.use('/client', express.static(__dirname + '/client'));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '/client/index.html'));
    });

    app.get('/create', (req, res) => {
        res.sendFile(path.join(__dirname, '/client/pages/create/index.html'));
    });

    app.get('/result', (req, res) => {
        res.sendFile(path.join(__dirname, '/client/pages/result/index.html'));
    });

    app.listen(3000, function () {
        console.log(`server started on: http://127.0.0.1:3000`);
    });

    process.on('exit', () => {
        process.exit();
    });
} catch (err) {
    console.log(err);
}
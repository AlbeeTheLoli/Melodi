import * as path from 'path'
import * as bodyParser from 'body-parser'

const express = require('express')

import * as fs from 'fs'
// import * as fs from 'fs'
import { Midi } from '@tonejs/midi'

const app = express();

import MelodyRtr from './routes/Melody'

try {
    app.use(express.urlencoded({extended: true}))
    // app.use(bodyParser.urlencoded({ extended: false }))
    // app.use(bodyParser.json())

    app.use('/melody', MelodyRtr)
    app.use('/client', express.static(__dirname + '/client'));

    app.get('/', (req: any, res: any) => {
        res.sendFile(path.join(__dirname, '/client/index.html'));
    });

    app.get('/create', (req: any, res: any) => {
        res.sendFile(path.join(__dirname, '/client/pages/create/index.html'));
    });

    app.get('/result', (req: any, res: any) => {
        res.sendFile(path.join(__dirname, '/client/pages/result/index.html'));
    });

    app.listen(8080, function () {
        console.log(`server started on: http://127.0.0.1:8080`);
    });

    process.on('exit', () => {
        process.exit();
    });
} catch (err) {
    console.log(err);
}
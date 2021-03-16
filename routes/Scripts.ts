import * as express from 'express'
import { Options, PythonShell } from 'python-shell'

const Router = express.Router()

Router.get('/test', (req: express.Request, res: express.Response) => {
    if (!req.query.some_value) {
        req.query.some_value = ''
    }
    let options = {
        args: [
            req.query.some_value?.toString(),
        ]
    }

    PythonShell.run('./python/test.py', options, (err, data) => {
        if (err) throw err
        if (data) {
            console.log(data);
            res.send(data);
        }
    })
});

export default Router
const express = require('express');
const app = express();
const port = 5000;
const helpers = require('./helpers/helpers');
const request = require('request');

app.listen(port, () => console.log(`Server listening on port ${port}!`));
app.get('/', (req, res) => res.send('The server is running.'));

app.get('/api/reverse-string', (req, res) => {
    if (!helpers.isDefined(req.query.string)) {
        res.json({data: 'Missing parameter string.'});
        return;
    }
    res.json({data: helpers.reverseString(req.query.string)});
});

app.get('/api/data', (req, res) => {
    // http://jsonplaceholder.typicode.com/posts
    const url = req.query.url;
    const method = req.query.method.toUpperCase();

    request({url: url, method: method, json: true}, (error, response, body) => {
        if (error) {
            res.json({data: 'No data retrieved from the external service.'});
            return;
        }
        res.json({data: body});
    });
});

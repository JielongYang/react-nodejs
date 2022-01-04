const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser());

app.use(function (req, res, next) {
    console.log('request log ' + new Date());
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/hi', (req, res) => {
    res.send('Hi There!');
});

app.post('/hi', (req, res) => {
    res.send('Hi: ' + JSON.stringify(req.body));
});

app.get(/^\/hi\/(\d+)$/, (req, res) => {
    res.send('Hi: id=' + req.params[0]);
});

app.get('/hi/:user', (req, res) => {
    res.send('Hi: ' + req.params.user);
});

app.get('/bye', (req, res) => {
    res.send('See you next time!');
});

app.use(function (req, res, next) {
    res.send('404 Not Found')
});

app.listen(8080, () => {
    console.log('Example app listening on port 8080!');
});
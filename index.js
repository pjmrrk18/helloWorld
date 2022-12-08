const Express = require('express');

const port = process.env.PORT || 2087; // you can use any free port

const app = Express();

app.get('/hello', (req, res) => {
    res.send('hello world');
})

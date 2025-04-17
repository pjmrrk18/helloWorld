const Express = require('express');

const port = process.env.PORT || 2087; // you can use any free port

const app = Express();

app.get('/hello', (req, res) => {
    res.send('hello world 12');
})

app.listen(8080, () => {
    console.log("Listening at 8080 port")
})

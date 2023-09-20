const express = require('express')
const app = express()

function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
};
app.use(logger);

app.get('/', function (req, res) {
    res.send('Welcome')
})

app.get('/hello', function (req, res) {
    res.send('Hello World!')
})


app.get('/goodbye', function (req, res) {
    res.send('Good Bye')
})

console.log('Server running at http://localhost:3000/');
app.listen(3000)
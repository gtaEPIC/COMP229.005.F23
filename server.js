const express = require('express');
const app = express();

function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
}

function helloWorld(req, res) {
    res.send('Hello World!')
}

function goodbye(req, res) {
    res.send('Goodbye!')
}

app.use(logger);
app.get("/", (req, res) => {
    res.send("Welcome")
});
app.get("/goodbye", goodbye);
app.get("/hello", helloWorld);


app.listen(3000);
console.log('Server running on port 3000.');
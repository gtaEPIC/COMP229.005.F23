const connect = require('connect');
const app = connect();

function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
}

function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
}

function goodbye(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Goodbye World!');
}

app.use(logger);
app.use("/goodbye", goodbye);
app.use("/hello", helloWorld);


app.listen(3000);
console.log('Server running on port 3000.');
var express = require("express");
var app = express();

var hostname = 'localhost';
var port = 1997;

app.get('/hello', (req, res) => {
    res.send("<h1>Hello World</h1>")
});


app.listen(port, hostname, () => {
    console.log(`starting with ${hostname}:${port}`);
})
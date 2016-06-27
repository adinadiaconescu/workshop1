var express = require('express');

var app = express();

var port = 3003;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, res) {
    res.send('hello adina');
});


app.get('/books', function (req, res) {
    res.send('hello books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
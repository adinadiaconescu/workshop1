var express = require('express');

var app = express();

var port = process.env.PORT || 3003;
var nav = [{
    Link: '/Books',
    Text: 'Book'
}, {
    Link: '/Author',
    Text: 'Author'
}];

var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
app.use(express.static('public'));

app.set('views', './src/views');

app.set('view engine', '.ejs');

app.use('/books', bookRouter);

app.use('/admin', adminRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'hello from render !',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }]
    });
});

app.get('/Books', function (req, res) {
    res.send('hello books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
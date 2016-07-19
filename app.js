var express = require('express');
var bodyParser = require('body-parser');
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
var authRouter = require('./src/routes/authRoutes')(nav);

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.set('views', './src/views');

app.set('view engine', '.ejs');

app.use('/books', bookRouter);

app.use('/admin', adminRouter);

app.use('/auth', authRouter);

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
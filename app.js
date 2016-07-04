var express = require('express');

var app = express();

var port = process.env.PORT || 3003;


app.use(express.static('public'));

var bookRouter = express.Router();

app.set('views', './src/views');


app.set('view engine', '.ejs');

var books = [{
    title: 'Cartea cartilor',
    author: 'the people'
}, {
    title: 'Cartea 7',
    author: 'R2D2'
},
    {
        title: 'Cartea xx',
        author: 'the other people'
    }];

bookRouter.route('/')
    .get(function (req, res) {
        res.render('books', {
            title: 'Books !',
            nav: [{
                Link: '/Books',
                Text: 'Books'
            }, {
                Link: '/Authors',
                Text: 'Authors'
            }],
            books : books
        });

    });

bookRouter.route('/single')
    .get(function (req, res) {
        res.send('Hello singleBooks');
    });

app.use('/Books', bookRouter);

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


app.get('/books', function (req, res) {
    res.send('hello books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
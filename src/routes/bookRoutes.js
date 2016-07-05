/**
 * Created by adch on 05.07.2016.
 */
var express = require('express');

var bookRouter = express.Router();
var router = function (nav) {
    var books = [
        {
            title: 'Cartea cartilor',
            author: 'the people'
        }, {
            title: 'Cartea 7',
            author: 'R2D2'
        },
        {
            title: 'Cartea xx',
            author: 'the other people'
        },
        {
            title: 'Cartea xx',
            author: 'the other people'
        }];

    bookRouter.route('/')
        .get(function (req, res) {
            res.render('bookListView', {
                title: 'Books !',
                nav: nav,
                books: books
            });

        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'Books !',
                nav: nav,
                book: books[id]
            });
        });
    return bookRouter;
};

module.exports = router;
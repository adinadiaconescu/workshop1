/**
 * Created by adch on 05.07.2016.
 */
var express = require('express');
var mongodb = require ('mongodb').MongoClient;
var bookRouter = express.Router();
var objectId =  require ('mongodb').ObjectID;

var router = function (nav) {

    bookRouter.use(function(req, res, next) {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    });

    bookRouter.route('/')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.find({}).toArray(function (err, results) {
                    res.render('bookListView', {
                        title: 'Books !',
                        nav: nav,
                        books: results
                    });
                });
            });
        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;

            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.findOne({_id: new objectId(id)}, function (err, results) {
                    res.render('bookView', {
                        title: 'Book !',
                        nav: nav,
                        book: results
                    });
                });
            });
        });
    return bookRouter;
};

module.exports = router;
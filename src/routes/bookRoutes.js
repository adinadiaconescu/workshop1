/**
 * Created by adch on 05.07.2016.
 */
var express = require('express');
var bookRouter = express.Router();

var router = function (nav) {

    var bookService =
        require('../service/goodReadService')();
    var bookController = require('../controllers/bookController')(bookService, nav);
    bookRouter.use(bookController.middleware);

    bookRouter.route('/')
        .get(bookController.getIndex);

    bookRouter.route('/:id')
        .get(bookController.getById);

    return bookRouter;
};

module.exports = router;
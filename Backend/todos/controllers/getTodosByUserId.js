const TODO = require('../models/todo');

module.exports = function (req, res, next) {
    TODO.find({user: req.params.userId}, function (err, todos) {
        TODO.populate(todos, {path: 'User'}, function (err, todos) {
            res.status(200).json(todos);
        });
    })
};
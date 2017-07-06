const TODO = require('../models/todo');

module.exports = function (req, res, next) {
    TODO.find(function (err, todos) {
        res.status(200).json(todos);
    })
};
const TODO = require('../models/todo');

module.exports = function (userId) {
    return TODO.find({user: userId}, function (err, todos) {
        return todos;
    })
};
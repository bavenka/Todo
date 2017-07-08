const TODO = require('../models/todo');

module.exports = function (id) {
    return TODO.findById(id).then(todo => {
        todo.completed = !todo.completed;
        return todo.save();
    });
};
const TODO = require('../models/todo');

module.exports = function (id, text, userId, completed) {

    let newTodo = {};
    if (text) {
        newTodo.text = text;
    }
    if (userId) {
        newTodo.user = userId;
    }
    if (completed) {
        newTodo.completed = completed;
    }
    return TODO.findByIdAndUpdate(id, newTodo, {new: true}).exec();
};


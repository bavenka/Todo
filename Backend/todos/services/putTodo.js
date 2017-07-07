const TODO = require('../models/todo');

module.exports = function (id, text, userId, completed) {
    return TODO.findById(id, function (err, todo) {
        if (err)
            return err;
        if (todo !== null) {
            if (text) {
                todo.text = text;
            }
            if (userId) {
                todo.user = userId;
            }
            if (completed) {
                todo.completed = completed;
            }

            return todo.save(function (err, todo) {
                if (err)
                    return err;
                return todo;//TODO Спросить почему не работает!
            });
        }
    });
};


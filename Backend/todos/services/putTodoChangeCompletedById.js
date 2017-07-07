const TODO = require('../models/todo');

//TODO возвращает старый объект. Почему?
module.exports = function (id) {
    return TODO.findById(id, function (err, todo) {
        if (err)
            return err;

        todo.completed = !todo.completed;

        return todo.save(function (err, todo) {
            if (err)
                return err;
            return todo;
        });
    });
};
const TODO = require('../models/todo');

module.exports = async function (userId) {
    let resTodos;
    TODO.find({user: userId}, function (err, todos) {
        if (err) {
            return err;
        }
        if (todos !== null) {
            const areAllMarked = todos.every(todo => todo.completed);
            todos.forEach(todo => todo.completed = !areAllMarked);

            todos.forEach(todo => todo.save(function (err, todo) {
                if (err) {
                    return err;
                }
            }));
            resTodos = todos;
        }
    });
    return await resTodos;
};
const TODO = require('../models/todo');

module.exports = function (userId) {
    return TODO.find({user: userId}).then(todos => {
        if (todos !== null) {
            const areAllMarked = todos.every(todo => todo.completed);
            todos.forEach(todo => todo.completed = !areAllMarked);
            return todos.map(todo => todo.save());
        }
    });
};
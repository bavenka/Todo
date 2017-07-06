const TODO = require('../models/todo');

module.exports = function (req, res, next) {
    TODO.find({user: req.params.user_id}, function (err, todos) {
        if (err)
            return next(err);
        if (todos !== null) {
            const areAllMarked = todos.every(todo => todo.completed);
            todos.forEach(todo => todo.completed = !areAllMarked);

            todos.forEach(todo => todo.save(function (err, todo) {
                if (err)
                    return next(err);
            }));
            res.status(202).json(todos);
        }
    })
};
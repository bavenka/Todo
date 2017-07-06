const TODO = require('../models/todo');

module.exports = function (req, res, next) {
    TODO.findById(req.params.id, function (err, todo) {
        if (err)
            return next(err);

        todo.completed = !todo.completed;

        todo.save(function (err, todo) {
            if (err)
                return next(err);
            res.status(202).json(todo);
        });
    })
};
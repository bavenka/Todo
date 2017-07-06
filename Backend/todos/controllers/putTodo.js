const TODO = require('../models/todo');

module.exports = function (req, res, next) {
    TODO.findById(req.body.id, function (err, todo) {
        if (err)
            return next(err);
        if (todo !== null) {
            if (req.body.text) {
                todo.text = req.body.text;
            }
            if (req.body.user_id) {
                todo.user = req.body.user_id;
            }
            if (req.body.completed) {
                todo.completed = req.body.completed;
            }

            todo.save(function (err, todo) {
                if (err)
                    return next(err);
                res.status(202).json(todo);
            });
        }
    });
};
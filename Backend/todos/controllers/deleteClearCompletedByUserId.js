const TODO = require('../models/todo');

module.exports = function (req, res, next) {
    TODO.remove({user: req.params.user_id, completed: true}, function (err) {
        if (err)
            return next(err);
        res.sendStatus(200);
    })
};
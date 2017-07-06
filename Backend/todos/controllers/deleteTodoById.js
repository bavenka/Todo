const TODO = require('../models/todo');

module.exports = function (req, res, next) {
    TODO.findById(req.params.id).remove(function (err) {
        if (err)
            return next(err);
        res.sendStatus(200);
    })
};
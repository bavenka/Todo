const TODO = require('../models/todo');

module.exports = function (req, res, next) {
    let newTODO = new TODO(
        {
            text: req.body.text,
            completed: req.body.completed,
            user: req.body.user_id
        });
    newTODO.save(function (err, newTODO) {
        if (err)
            return next(err);
        res.status(201).json(newTODO);
    })
};
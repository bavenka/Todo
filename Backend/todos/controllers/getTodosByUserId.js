const getTodosByUserId = require('../services/getTodosByUserId');

module.exports = function (req, res, next) {
    getTodosByUserId(req.params.userId).then(todos => {
        res.status(200).json(todos);
    }).catch(err => {
        res.status(500).send(err);
    });
};
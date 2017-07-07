const putTodo = require('../services/putTodo');

module.exports = function (req, res, next) {
    putTodo(req.body.id, req.body.text, req.body.user_id, req.body.completed).then(todo => {
        res.status(202).json(todo);
    }).catch(err => {
        res.status(500).send(err);
    });
};
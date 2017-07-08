import postTodo from '../services/postTodo'

module.exports = function (req, res, next) {
    postTodo(req.body.text, req.body.completed, req.body.user_id).then(newTODO => {
        res.status(201).json(newTODO);
    }).catch(err => {
        res.status(500).send(err);
    });
};
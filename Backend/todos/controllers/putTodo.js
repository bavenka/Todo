const putTodo = require('../services/putTodo');

module.exports = async function (req, res, next) {
    const todo =
        await putTodo(req.body.id, req.body.text, req.body.user_id, req.body.completed);
    res.status(202).json(todo);
};
const putTodoChangeCompletedById = require('../services/putTodoChangeCompletedById');

module.exports = async function (req, res, next) {
    const todo = await putTodoChangeCompletedById(req.params.id);
    res.status(202).json(todo);
};
const getTodosByUserId = require('../services/getTodosByUserId');

module.exports = async function (req, res, next) {
    const todos = await getTodosByUserId(req.params.userId);
    res.status(200).json(todos);
};
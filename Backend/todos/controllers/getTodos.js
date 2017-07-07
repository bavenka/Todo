const getTodos = require('../services/getTodos');

module.exports = async function (req, res, next) {
    const todos = await getTodos(); //TODO как отловить ошибку?
    res.status(200).json(todos);
};
const getTodos = require('../services/getTodos');

module.exports = function (req, res, next) {
    getTodos().then(todos => {
        res.status(200).json(todos);
    });
};
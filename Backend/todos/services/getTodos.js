const TODO = require('../models/todo');

module.exports = function () {
    return TODO.find(function (err, todos) {
        if (err)
            return err;
        return todos;
    });
};
const TODO = require('../models/todo');

module.exports = function (text, completed, userId) {
    let newTODO = new TODO({
        text,
        completed,
        user: userId
    });
    return newTODO.save();
};
const TODO = require('../models/todo');

module.exports = function (userId) {
    return TODO.remove({user: userId, completed: true});
};
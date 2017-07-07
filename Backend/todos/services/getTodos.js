const TODO = require('../models/todo');

module.exports = function () {
    return TODO.find();
};
const TODO = require('../models/todo');

module.exports = async function (id) {
    return TODO.findById(id).remove();
};
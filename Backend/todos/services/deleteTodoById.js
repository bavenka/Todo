const TODO = require('../models/todo');

module.exports = async function (id) {
    let res;
    await TODO.findById(id).remove(function (err) {
        if (err)
            res = err;
        res = null;
    });
    return res;
};
const TODO = require('../models/todo');

module.exports = async function (userId) {
    let res;
    await TODO.remove({user: userId, completed: true}, function (err) {
        err ? res = err : res = null;
    });
    return res;
};
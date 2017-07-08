const mongoose = require('mongoose');
const TODOSchema = require('../schemas/todo');

const TODO = mongoose.model('TODO', TODOSchema);

module.exports = TODO;
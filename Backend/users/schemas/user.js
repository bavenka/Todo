var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: false,
        required: true
    },
    todos: [{
        type: Schema.ObjectId,
        ref: 'TODO'
    }]
});

module.exports = UserSchema;
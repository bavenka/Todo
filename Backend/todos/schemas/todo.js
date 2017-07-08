const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TODOSchema = new Schema({
    text: {
        type: String,
        unique: false,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

module.exports = TODOSchema;
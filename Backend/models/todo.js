var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TODOSchema = new Schema({
    description: {
        type: String,
        unique: false,
        required: true
    },
    status:{
        type: Boolean,
        required: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

var TODO = mongoose.model('TODO', TODOSchema);
module.exports = TODO;
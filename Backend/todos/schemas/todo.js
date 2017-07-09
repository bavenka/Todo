import {Schema}  from 'mongoose';

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

export default TODOSchema;
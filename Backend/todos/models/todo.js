import mongoose from 'mongoose';
import TODOSchema from '../schemas/todo';

const TODO = mongoose.model('TODO', TODOSchema);

export default TODO;
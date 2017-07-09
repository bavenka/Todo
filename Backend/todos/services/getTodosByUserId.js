import TODO from '../models/todo';

export default function (userId) {
    return TODO.find({user: userId});
};
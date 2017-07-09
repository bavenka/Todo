import TODO from  '../models/todo';

export default function (userId) {
    return TODO.remove({user: userId, completed: true});
};
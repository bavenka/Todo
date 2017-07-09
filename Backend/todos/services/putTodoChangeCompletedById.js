import TODO from '../models/todo';

export default function (id) {
    return TODO.findById(id).then(todo => {
        todo.completed = !todo.completed;
        return todo.save();
    });
};
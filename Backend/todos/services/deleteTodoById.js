import TODO from '../models/todo';

export default async function (id) {
    return TODO.findById(id).remove();
};
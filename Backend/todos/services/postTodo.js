import TODO from '../models/todo';

export default function (text, completed, userId) {
    let newTODO = new TODO({
        text,
        completed,
        user: userId
    });
    return newTODO.save();
};
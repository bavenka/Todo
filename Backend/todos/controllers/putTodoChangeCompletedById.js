import putTodoChangeCompletedById from '../services/putTodoChangeCompletedById';

export default async function (req, res, next) {
    putTodoChangeCompletedById(req.params.id).then((todo) => {
        res.status(202).json(todo);
    }).catch(err => {
        res.status(500).send(err);
    });
};
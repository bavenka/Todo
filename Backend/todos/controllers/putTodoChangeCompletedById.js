import putTodoChangeCompletedById from '../services/putTodoChangeCompletedById';

export default async function (req, res, next) {//TODO вытащить id из токена!  как протолкнуть токен из ауторизации
    putTodoChangeCompletedById(req.params.id).then((todo) => {
        res.status(202).json(todo);
    }).catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
};
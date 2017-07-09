import deleteTodoById from '../services/deleteTodoById';

export default function (req, res, next) {
    deleteTodoById(req.params.id).then(err => {
        err === null ? res.status(500).send(err) : res.sendStatus(200);
    }).catch(err => {
        res.status(500).send(err);
    });
};
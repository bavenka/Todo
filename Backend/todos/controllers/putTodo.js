import putTodo from '../services/putTodo';

export  default function (req, res, next) {
    putTodo(req.body.id, req.body.text, req.decodedToken.id, req.body.completed).then(todo => {
        res.status(202).json(todo);
    }).catch(err => {
        res.status(500).send(err);
    });
};
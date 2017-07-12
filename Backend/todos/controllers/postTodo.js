import postTodo from '../services/postTodo'

export default function (req, res, next) {
    postTodo(req.body.text, req.body.completed, req.decodedToken.id).then(newTODO => {
        res.status(201).json(newTODO);
    }).catch(err => {
        res.status(500).send(err);
    });
};
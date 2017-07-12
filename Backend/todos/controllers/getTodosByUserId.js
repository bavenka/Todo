import getTodosByUserId from '../services/getTodosByUserId';

export default function (req, res, next) {
    getTodosByUserId(req.decodedToken.id).then(todos => {
        res.status(200).json(todos);
    }).catch(err => {
        res.status(500).send(err);
    });
};
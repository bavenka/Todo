import getTodos from '../services/getTodos';

export default function (req, res, next) {
    getTodos().then(todos => {
        res.status(200).json(todos);
    }).catch(err => {
        res.status(500).send(err);
    });
};
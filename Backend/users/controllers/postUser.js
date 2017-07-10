import postUser from '../services/postUser';

export default function (req, res, next) {
    postUser(req.body.username, req.body.email, req.body.password).then(user => {
        res.status(201).json(user);
    }).catch(err => {
        res.status(409).send(err);
    });
};
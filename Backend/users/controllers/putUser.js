import putUser from '../services/putUser';

export default function (req, res, next) {
    putUser(req.body.id, req.body.username, req.body.email, req.body.password).then(user => {
        res.status(202).json(user);
    }).catch(err => {
        res.status(500).send(err);
    });
};
import getUser from '../services/getUser';

export default function (req, res, next) {
    getUser(req.decodedToken.id).then(user => {
        res.status(200).json(user);
    }).catch(err => {
        res.status(500).send(err);
    });
};
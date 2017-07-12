import deleteUserById from '../services/deleteUserById';

export default function (req, res, next) {
    deleteUserById(req.decodedToken.id).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        res.status(500).send(err);
    });
};
import deleteUserByEmail from '../services/deleteUserByEmail';

export default function (req, res, next) {
    deleteUserByEmail(req.decodedToken.email).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        res.status(500).send(err);
    });
};
import getUserByUsername from '../services/getUserByUsername';

export default function (req, res, next) {
    getUserByUsername(req.decodedToken.username).then(user => {
        res.status(200).json(user);
    }).catch(err => {
        res.status(500).send(err);
    });
};
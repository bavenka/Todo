import getUserByEmail from '../services/getUserByEmail';

export default function (req, res, next) {
    getUserByEmail().then(user => {
        res.status(200).json(user);
    }).catch(err => {
        res.status(500).send(err);
    });
};
import getUsers from '../services/getUsers';

export default function (req, res, next) {
    getUsers().then(user => {
        res.status(200).json(user);
    }).catch(err => {
        res.status(500).send(err);
    });
};
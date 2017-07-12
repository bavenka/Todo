import deleteClearCompletedByUserId from '../services/deleteClearCompletedByUserId'

export default function (req, res, next) {
    deleteClearCompletedByUserId(req.decodedToken.id).then(err => {
        err === null ? res.status(500).send(err) : res.sendStatus(200);
    }).catch(err => {
        res.status(500).send(err);
    });
};
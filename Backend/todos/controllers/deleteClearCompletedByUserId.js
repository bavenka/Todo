import deleteClearCompletedByUserId from '../services/deleteClearCompletedByUserId'

module.exports = function (req, res, next) {
    deleteClearCompletedByUserId(req.params.user_id).then(err => {
        err === null ? res.status(500).send(err) : res.sendStatus(200);
    }).catch(err => {
        res.status(500).send(err);
    });
};
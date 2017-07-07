import putCompleteAllByUserId from '../services/putCompleteAllByUserId';

module.exports = function (req, res, next) {
    putCompleteAllByUserId(req.params.user_id).then(todos => {
        res.status(202).json(todos);
    }).catch(err => {
        res.status(500).send(err);
    });
};
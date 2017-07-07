import deleteClearCompletedByUserId from '../services/deleteClearCompletedByUserId'

module.exports = async function (req, res, next) {
    const err = await deleteClearCompletedByUserId(req.params.user_id);
    err ? res.send(err) : res.sendStatus(200);
};
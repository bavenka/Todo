import deleteTodoById from '../services/deleteTodoById';

module.exports = async function (req, res, next) {
    const err = await deleteTodoById(req.params.id);
    err ? res.send(err) : res.sendStatus(200);
};
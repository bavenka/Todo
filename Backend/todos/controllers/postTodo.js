import postTodo from '../services/postTodo'

module.exports = async function (req, res, next) {
    const newTODO = await postTodo(req.body.text, req.body.completed, req.body.user_id);
    res.status(201).json(newTODO);
};
import putCompleteAllByUserId from '../services/putCompleteAllByUserId';

module.exports = function (req, res, next) {
    const todo = putCompleteAllByUserId(req.params.user_id); //TODO проверка ошибки
    console.log(todo);
    res.status(202).json(todo);
};
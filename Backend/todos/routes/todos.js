import express from 'express'
import validate from 'express-validation'
import {
    getTodosByUserIdValidator,
    postTodoValidator,
    putTodoValidator,
    putTodoChangeCompletedByIdValidator,
    putCompleteAllByUserIdValidator,
    deleteClearCompletedByUserIdValidator
} from '../validators/index'

import {
    getTodosController,
    getTodosByUserIdController,
    postTodoController,
    putTodoController,
    putTodoChangeCompletedByIdController,
    putCompleteAllByUserIdController,
    deleteClearCompletedByUserIdController,
    deleteTodoByIdController
} from '../controllers/index'

import authorization from '../../middleware/authorization'

let router = express.Router();

router.get('/', authorization, getTodosController);

router.get('/:userId', authorization, validate(getTodosByUserIdValidator), getTodosByUserIdController);

router.post('/', authorization, validate(postTodoValidator), postTodoController);

router.put('/', authorization, validate(putTodoValidator), putTodoController);

router.put('/changeCompleted/:id', authorization, validate(putTodoChangeCompletedByIdValidator), putTodoChangeCompletedByIdController);

router.put('/completeAll/:user_id', authorization, validate(putCompleteAllByUserIdValidator), putCompleteAllByUserIdController);

router.delete('/clearCompleted/:user_id', authorization, validate(deleteClearCompletedByUserIdValidator), deleteClearCompletedByUserIdController);

router.delete('/:id', authorization, validate(deleteTodoByIdController), deleteTodoByIdController);

export default router;
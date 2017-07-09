import express from 'express';
import validate from 'express-validation';
let router = express.Router();

import {
    getTodosByUserIdValidator,
    postTodoValidator,
    putTodoValidator,
    putTodoChangeCompletedByIdValidator,
    putCompleteAllByUserIdValidator,
    deleteClearCompletedByUserIdValidator
} from '../validators/index';

import {
    getTodosController,
    getTodosByUserIdController,
    postTodoController,
    putTodoController,
    putTodoChangeCompletedByIdController,
    putCompleteAllByUserIdController,
    deleteClearCompletedByUserIdController,
    deleteTodoByIdController
} from '../controllers/index';

router.get('/', getTodosController);

router.get('/:userId', validate(getTodosByUserIdValidator), getTodosByUserIdController);

router.post('/', validate(postTodoValidator), postTodoController);

router.put('/', validate(putTodoValidator), putTodoController);

router.put('/changeCompleted/:id', validate(putTodoChangeCompletedByIdValidator), putTodoChangeCompletedByIdController);

router.put('/completeAll/:user_id', validate(putCompleteAllByUserIdValidator), putCompleteAllByUserIdController);

router.delete('/clearCompleted/:user_id', validate(deleteClearCompletedByUserIdValidator), deleteClearCompletedByUserIdController);

router.delete('/:id', validate(deleteTodoByIdController), deleteTodoByIdController);

export default router;
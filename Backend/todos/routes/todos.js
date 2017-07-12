import express from 'express'
import validate from 'express-validation'
import {
    postTodoValidator,
    putTodoValidator,
    putTodoChangeCompletedByIdValidator,
    deleteTodoByIdValidator
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

// Скрыт для безопасности (любой юзер имеет возможность получить всех пользователей)
//router.get('/all', authorization, getTodosController);

router.get('/', authorization, getTodosByUserIdController);

router.post('/', authorization, validate(postTodoValidator), postTodoController);

router.put('/', authorization, validate(putTodoValidator), putTodoController);

router.put('/changeCompleted/:id', authorization, validate(putTodoChangeCompletedByIdValidator), putTodoChangeCompletedByIdController);

/*Complete all todos of user by user id.*/
router.put('/completeAll/', authorization, putCompleteAllByUserIdController);

/*Clear completed todos of user by user id.*/
router.delete('/clearCompleted/', authorization, deleteClearCompletedByUserIdController);

router.delete('/:id', authorization, validate(deleteTodoByIdValidator), deleteTodoByIdController);

export default router;
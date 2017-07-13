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

import Authorization from '../../middleware/authorization'

let router = express.Router();

router.use(Authorization);

// Скрыт для безопасности (любой юзер имеет возможность получить всех пользователей)
//router.get('/all', authorization, getTodosController);

router.get('/', getTodosByUserIdController);

router.post('/', validate(postTodoValidator), postTodoController);

router.put('/', validate(putTodoValidator), putTodoController);

router.put('/changeCompleted/:id', validate(putTodoChangeCompletedByIdValidator), putTodoChangeCompletedByIdController);

/*Complete all todos of user by user id.*/
router.put('/completeAll/', putCompleteAllByUserIdController);

/*Clear completed todos of user by user id.*/
router.delete('/clearCompleted/', deleteClearCompletedByUserIdController);

router.delete('/:id', validate(deleteTodoByIdValidator), deleteTodoByIdController);

export default router;
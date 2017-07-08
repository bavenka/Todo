const express = require('express');
const router = express.Router();
let validate = require('express-validation');

//Validators
const getTodosByUserIdValidator = require('../validators/getTodosByUserId');
const postTodo = require('../validators/postTodo');
const putTodo = require('../validators/putTodo');
const putTodoChangeCompletedById = require('../validators/putTodoChangeCompletedById');
const putCompleteAllByUserId = require('../validators/putCompleteAllByUserId');
const deleteClearCompletedByUserId = require('../validators/deleteClearCompletedByUserId');
const deleteById = require('../validators/deleteTodoById');

//Controllers
const getTodosController = require('../controllers/getTodos');
const getTodosByUserIdController = require('../controllers/getTodosByUserId');
const postTodoController = require('../controllers/postTodo');
const putTodoController = require('../controllers/putTodo');
const putTodoChangeCompletedByIdController = require('../controllers/putTodoChangeCompletedById');
const putCompleteAllByUserIdController = require('../controllers/putCompleteAllByUserId');
const deleteClearCompletedByUserIdController = require('../controllers/deleteClearCompletedByUserId');
const deleteTodoByIdController = require('../controllers/deleteTodoById');


router.get('/', getTodosController);

router.get('/:userId', validate(getTodosByUserIdValidator), getTodosByUserIdController);

router.post('/', validate(postTodo), postTodoController);

router.put('/', validate(putTodo), putTodoController);

router.put('/changeCompleted/:id', validate(putTodoChangeCompletedById), putTodoChangeCompletedByIdController);

router.put('/completeAll/:user_id', validate(putCompleteAllByUserId), putCompleteAllByUserIdController);

router.delete('/clearCompleted/:user_id', validate(deleteClearCompletedByUserId), deleteClearCompletedByUserIdController);

router.delete('/:id', validate(deleteById), deleteTodoByIdController);

module.exports = router;

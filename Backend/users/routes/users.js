import express from 'express'
import validate from 'express-validation';
import {
    getUsersController,
    getUserByEmailController,
    getUserByUsernameController,
    postUserController,
    putUserController,
    deleteUserByIdController,
    deleteUserByEmailController
} from '../controllers/index'
import {
    getUserByEmailValidator,
    getUserByUsernameValidator,
    postUserValidator,
    putUserValidator,
    deleteUserByIdValidator,
    deleteUserByEmailValidator
} from '../validators/index'

let router = express.Router();

router.get('/', getUsersController);

router.get('/email/:email', validate(getUserByEmailValidator), getUserByEmailController);

router.get('/username/:username', validate(getUserByUsernameValidator), getUserByUsernameController);

router.post('/', validate(postUserValidator), postUserController);

router.put('/', validate(putUserValidator), putUserController);

router.delete('/:id', validate(deleteUserByIdValidator), deleteUserByIdController);

router.delete('/email/:email', validate(deleteUserByEmailValidator), deleteUserByEmailController);

export default router;

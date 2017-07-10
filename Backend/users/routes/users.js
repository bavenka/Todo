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
import {getUserByEmailValidator} from '../validators/index'

let router = express.Router();

router.get('/', getUsersController);

router.get('/email/:email', validate(getUserByEmailValidator), getUserByEmailController);

router.get('/username/:username', getUserByUsernameController);

router.post('/', postUserController);

router.put('/', putUserController);

router.delete('/:id', deleteUserByIdController);

router.delete('/email/:email', deleteUserByEmailController);

export default router;

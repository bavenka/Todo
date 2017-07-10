import express from 'express'
import validate from 'express-validation';
import {
    getUsers,
    getUserByEmail,
    getUserByUsername,
    postUser,
    putUser,
    deleteUserById,
    deleteUserByEmail
} from '../controllers/index'

let router = express.Router();

router.get('/', getUsers);

router.get('/email/:email', getUserByEmail);

router.get('/username/:username', getUserByUsername);

router.post('/', postUser);

router.put('/', putUser);

router.delete('/:id', deleteUserById);

router.delete('/email/:email', deleteUserByEmail);

export default router;

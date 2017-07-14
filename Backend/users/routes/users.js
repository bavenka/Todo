import express from 'express'
import validate from 'express-validation'
import {
    getUserController,
    getUsersController,
    getUserByEmailController,
    getUserByUsernameController,
    postUserController,
    putUserController,
    deleteUserByIdController,
    deleteUserByEmailController,
    authorizationController
} from '../controllers/index'

import {
    postUserValidator,
    putUserValidator,
    authorizationValidator
} from '../validators/index'

import Authorization from '../../middleware/authorization'

let router = express.Router();

const currentRouterUrl = '/api/user';

router.use(Authorization.unless({
    path: [
        {url: currentRouterUrl + '/authorization', method: ['POST']},
        {url: currentRouterUrl, method: ['POST']},
    ]
}));

router.post('/authorization', validate(authorizationValidator), authorizationController);

// Скрыт для безопасности (любой юзер имеет возможность получить всех пользователей)
//router.get('/all', getUsersController);

router.get('/', getUserController);

router.get('/email/', getUserByEmailController);

router.get('/username/', getUserByUsernameController);

router.post('/', validate(postUserValidator), postUserController);

router.put('/', validate(putUserValidator), putUserController);

/*Delete user by id.*/
router.delete('/', deleteUserByIdController);

router.delete('/email/', deleteUserByEmailController);

export default router;

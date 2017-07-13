import express from 'express'
import validate from 'express-validation'
import jwt from 'jsonwebtoken'
import {
    getUserController,
    getUsersController,
    getUserByEmailController,
    getUserByUsernameController,
    postUserController,
    putUserController,
    deleteUserByIdController,
    deleteUserByEmailController
} from '../controllers/index'
import {
    postUserValidator,
    putUserValidator
} from '../validators/index'

import User from '../models/user'
import Authorization from '../../middleware/authorization'
import {Secret} from '../../constants/index'

let router = express.Router();

const currentRouterUrl = '/api/user';

router.use(Authorization.unless({
    path: [
        {url: currentRouterUrl + '/authorization', method: ['POST']},
        {url: currentRouterUrl, method: ['POST']},
    ]
}));

//TODO Добавить валидатор!
//TODO Разнести по уровням.
router.post('/authorization', function (req, res, next) {
        let searchParam;
        const email = req.body.email;
        const username = req.body.username;
        if (email) {
            searchParam = {email: email};
        } else if (username) {
            searchParam = {username: username};
        }

        User.findOne(searchParam, function (err, user) {
            if (err)
                throw err;

            if (!user) {
                res.status(404).json({success: false, message: 'Authentication failed. User not found.'});
            } else if (user) {

                if (user.password !== req.body.password) {
                    res.status(409).json({success: false, message: 'Authentication failed. Wrong password.'});
                } else {

                    const pureUser = {
                        username: user.username,
                        email: user.email,
                        id: user._id
                    };

                    const token = jwt.sign(pureUser, Secret, {
                        expiresIn: 86400 // expires in 24 hours
                    });

                    res.status(200).json({
                        success: true,
                        message: 'Enjoy your token!',
                        token: token
                    });
                }

            }

        });
    }
);

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

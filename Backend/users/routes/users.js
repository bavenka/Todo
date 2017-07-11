import express from 'express'
import validate from 'express-validation'
import jwt from 'jsonwebtoken'
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

import User from '../models/user'
import authorization from '../../middleware/authorization'
import {Secret} from '../../constants/index'

let router = express.Router();

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

                // check if password matches
                if (user.password !== req.body.password) {
                    res.status(409).json({success: false, message: 'Authentication failed. Wrong password.'});
                } else {

                    // if user is found and password is right
                    // create a token
                    delete user.password;
                    var token = jwt.sign(user, Secret, {
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

router.get('/', authorization, getUsersController);

router.get('/email/:email', authorization, validate(getUserByEmailValidator), getUserByEmailController);

router.get('/username/:username', authorization, validate(getUserByUsernameValidator), getUserByUsernameController);

router.post('/', validate(postUserValidator), postUserController);

router.put('/', authorization, validate(putUserValidator), putUserController);

router.delete('/:id', authorization, validate(deleteUserByIdValidator), deleteUserByIdController);

router.delete('/email/:email', authorization, validate(deleteUserByEmailValidator), deleteUserByEmailController);

export default router;

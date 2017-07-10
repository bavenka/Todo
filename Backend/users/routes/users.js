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

router.post('/', function (req, res, next) {
    var newUser = new User(
        {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
    newUser.save(function (err, newUser) {
        if (err)
            res.status(409).send(err);
        res.status(201).send(newUser);
    });
});

router.post('/', validate(postUserValidator), postUserController);

router.put('/', validate(putUserValidator), putUserController);

router.delete('/:id', validate(deleteUserByIdValidator), deleteUserByIdController);

router.delete('/email/:email', validate(deleteUserByEmailValidator), deleteUserByEmailController);

export default router;

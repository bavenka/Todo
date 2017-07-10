import express from 'express'
import validate from 'express-validation';
import User from '../models/user'
import {
    getUsers,
    getUserByEmail
} from '../controllers/index'

let router = express.Router();

router.get('/', getUsers);

router.get('/email/:email', getUserByEmail);

router.get('/username/:username', function (req, res, next) {
    User.findOne({username: req.params.username}, function (err, user) {
        if (err)
            return next(err);
        res.status(200).send(user);
    });
});

router.post('/', function (req, res, next) {
    var newUser = new User(
        {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
    newUser.save(function (err, newUser) {
        if (err) {
            res.status(409).send(err);
        }
        else {
            res.status(201).send(newUser);
        }
    });
});

router.put('/', function (req, res, next) {
    User.findById(req.body.id, function (err, user) {
        if (err)
            return next(err);
        if (user === null)
            return res.send(404, 'User not found!');

        user.username = req.body.username;
        user.email = req.body.email;
        user.password = req.body.password;
        user.save(function (err, user) {
            if (err)
                return next(err);
            res.status(202).send(user);
        });
    });
});

router.delete('/:id', function (req, res, next) {
    User.findById(req.params.id).remove(function (err) {
        if (err)
            return next(err);
        res.send(200);
    });
});

router.delete('/email/:email', function (req, res, next) {
    User.find({email: req.params.email}).remove(function (err) {
        if (err)
            return next(err);
        res.send(200);
    });
});

export default router;

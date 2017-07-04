var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    User.find(function (err, users) {
        if (err)
            return next(err);
        res.send(users);
    });
});

router.get('/email/:email', function (req, res, next) {
    User.find({email: req.params.email}, function (err, user) {
        if (err)
            return next(err);
        res.send(user);
    });
});

router.post('/', function (req, res, next) {
    var newUser = new User(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        });
    newUser.save(function (err, newUser) {
        if (err)
            return next(err);
        res.send(newUser);
    });
});

router.put('/', function (req, res, next) {
    User.findById(req.body.id, function (err, user) {
        if (err)
            return next(err);
        if (user === null) {
            return res.send(404, 'User not found!');
        }
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.email = req.body.email;
        user.password = req.body.password;
        user.save(function (err, user) {
            if (err)
                return next(err);
            res.send(user);
        });
    });
});

router.delete('/:id', function (req, res, next) {
    User.findById(req.params.id).remove(function (err) {
        if (err)
            return next(err);
        res.send(410);
    });
});

router.delete('/email/:email', function (req, res, next) {
    User.find({email: req.params.email}).remove(function (err) {
        if (err)
            return next(err);
        res.send(410);
    });
});

module.exports = router;

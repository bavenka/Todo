var express = require('express');
var router = express.Router();
var TODO = require('../models/todo');

router.get('/', function (req, res, next) {
    TODO.find(function (err, todos) {
        res.status(200).json(todos);
    });
});

router.get('/:userId', function (req, res, next) {
    TODO.find({user: req.params.userId}, function (err, todos) {
        TODO.populate(todos, {path: 'User'}, function (err, todos) {
            res.status(200).json(todos);
        });
    });
});

router.post('/', function (req, res, next) {
    var newTODO = new TODO(
        {
            text: req.body.text,
            completed: req.body.completed,
            user: req.body.user_id
        });
    newTODO.save(function (err, newTODO) {
        if (err)
            return next(err);
        res.status(201).json(newTODO);
    });
});

router.put('/', function (req, res, next) {
    TODO.findById(req.body.id, function (err, todo) {
        if (err)
            return next(err);

        if (req.body.text !== undefined && req.body.text !== null) {
            todo.text = req.body.text;
        }
        if (req.body.user_id !== undefined && req.body.user_id !== null) {
            todo.user = req.body.user_id;
        }
        if (req.body.completed !== undefined && req.body.completed !== null) {
            todo.completed = req.body.completed;
        }

        todo.save(function (err, todo) {
            if (err)
                return next(err);
            res.status(202).json(todo);
        });
    });
});

router.put('/changeCompleted/:id', function (req, res, next) {
    TODO.findById(req.params.id, function (err, todo) {
        if (err)
            return next(err);

        todo.completed = !todo.completed;

        todo.save(function (err, todo) {
            if (err)
                return next(err);
            res.status(202).json(todo);
        });
    });
});

router.delete('/:id', function (req, res, next) {
    TODO.findById(req.params.id).remove(function (err) {
        if (err)
            return next(err);
        res.send(200);
    });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var TODO = require('../models/todo');

router.get('/', function (req, res, next) {
    TODO.find(function (err, todos) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(todos);
    });
});

router.get('/:userId', function (req, res, next) {
    TODO.find({user: req.params.userId}, function (err, todos) {
        TODO.populate(todos, {path: 'User'}, function (err, todos) {
            res.send(todos);
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
        res.send(newTODO);
    });
});

router.put('/', function (req, res, next) {
    TODO.findById(req.body.id, function (err, todo) {
        if (err)
            return next(err);
        todo.text = req.body.text;
        todo.user = req.body.user_id;
        todo.save(function (err, todo) {
            if (err)
                return next(err);
            res.send(todo);
        });
    });
});

router.delete('/:id', function (req, res, next) {
    TODO.findById(req.params.id).remove(function (err) {
        if (err)
            return next(err);
        res.send(410);
    });
});

module.exports = router;

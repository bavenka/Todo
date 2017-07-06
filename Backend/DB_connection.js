var mongoose = require('mongoose');

var DB = mongoose.connection;

mongoose.connect('mongodb://localhost/test', {server: {auto_reconnect: true}});

DB.on('error', function (err) {
    console.error('Connection error(DB):', err.message);
});
DB.on('open', function callback() {
    console.info("Connected to DB opened!");
});

DB.on('disconnected', function () {
    console.log('DB disconnected!');
    mongoose.connect('mongodb://localhost/test', {server: {auto_reconnect: true}});
});

module.exports = DB;